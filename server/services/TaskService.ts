import { TaskMcqDAO } from './../dao/TaskMcqDAO';
import { MCQDAO } from './../dao/MCQDAO';
import { BatchUserDAO } from './../dao/BatchUserDAO';
import { App } from "./../utils/App";
import { Task } from "./../entities/Task";
import { TaskMcq } from "./../entities/TaskMcq";
import { TaskDAO } from "./../dao/TaskDAO";

export class TaskService {
    private taskDao: TaskDAO;
    private buDao: BatchUserDAO;
    private mcqDao: MCQDAO;
    private taskmcqDao: TaskMcqDAO;

    constructor() {
        this.taskDao = new TaskDAO();
        this.buDao = new BatchUserDAO();
        this.mcqDao = new MCQDAO();
        this.taskmcqDao = new TaskMcqDAO();
    }

    async entity(id: string) {
        try {
            let data: any = await this.taskDao.entity(id);
            return Promise.resolve(data);
        } catch (error) {
            return Promise.reject(error);
        }
    }

    async search(reqData: any) {
        try {
            let data: any = await this.taskDao.search(reqData);
            return Promise.resolve(data)
        } catch (error) {
            return Promise.reject(error);
        }
    }

    async submit(item: any) {
        try {
            let data: any = item;
            console.log(data)
            return Promise.resolve(data)
        } catch (error) {
            return Promise.reject(error);
        }
    }

    async save(item: any) {
        try {
            let bmData = await this.buDao.search({ batch: item.batch });
            var batchStudents = [];
            for (var i = 0; i < bmData.length; i++) {
                if (bmData[i].user.role.id == 'ROLE_STUDENT') {
                    batchStudents.push(bmData[i].user.id);
                }
            }
            var tasks = [];
            for (var j = 0; j < batchStudents.length; j++) {
                (await this.saveIndividual({ userProfile: { id: batchStudents[j] }, topic: { id: item.topic }, batch: { id: item.batch } })
                    .then((x) => {
                        tasks.push(x)
                    })
                )
            }
            let mcqs = await this.mcqDao.search({ topic: item.topic });
            for (var k = 0; k < mcqs.length; k++) {
                for (var l = 0; l < tasks.length; l++) {
                    let obj: any = {
                        id: App.UniqueNumber(),
                        mcq: mcqs[k],
                        task: tasks[l],
                        isRightAns: false,
                        yourAns: null
                    }
                    await this.taskmcqDao.save(obj)
                }
            }
            return Promise.resolve('Task Created for Students')
            // this.saveIndividual()
        } catch (err) {
            return Promise.reject(err)
        }
    }

    async saveIndividual(item) {
        try {
            if (this.validate(item)) {
                let uid = App.UniqueNumber();
                if (!item.id || item.id == '' || item.id == '0') {
                    item.id = uid;
                }
                let taskData: any = await this.taskDao.save(item);
                let returnData = {
                    id: item.id,
                    message: "Saved Successfully"
                }
                return Promise.resolve(returnData);
            } else {
                let returnData = {
                    message: "Please enter proper values."
                }
                return Promise.reject(returnData);
            }
        } catch (error) {
            return Promise.reject(error);
        }
    }

    async studentTask(item) {
        try {
            let taskData: Task = await this.taskDao.findOne(item);
            let MCQData: any = await this.taskmcqDao.search({ task: taskData.id })
            return Promise.resolve(MCQData);
        } catch (error) {
            return Promise.reject(error);
        }
    }

    async delete(id: any) {
        try {
            let data: Task = (await this.taskDao.entity(id))
            let result: any = await this.taskDao.delete(data);
            let returnData = {
                id: id,
                message: "Removed Successfully"
            }
            return Promise.resolve(returnData);
        } catch (error) {
            return Promise.reject(error);
        }
    }

    async validate(item: Task) {
        return true;
    }
}
