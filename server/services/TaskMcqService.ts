import { App } from "./../utils/App";
import { TaskMcq } from "./../entities/TaskMcq";
import { TaskMcqDAO } from "./../dao/TaskMcqDAO";
import { MCQDAO } from "./../dao/MCQDAO";

export class TaskMcqService {
    private taskMcqDao: TaskMcqDAO;
    private mcqDao: MCQDAO;

    constructor() {
        this.taskMcqDao = new TaskMcqDAO();
        this.mcqDao = new MCQDAO();
    }

    async entity(id: string) {
        try {
            let data: any = await this.taskMcqDao.entity(id);
            return Promise.resolve(data);
        } catch (error) {
            return Promise.reject(error);
        }
    }

    async search(reqData: any) {
        try {
            let data: any = await this.taskMcqDao.search(reqData);
            return Promise.resolve(data)
        } catch (error) {
            return Promise.reject(error);
        }
    }

    async submit(item: any) {
        try {
            console.log(item)
        } catch (error) {
            return Promise.reject(error);
        }
    }

    async delete(id: any) {
        try {
            let data: TaskMcq = (await this.taskMcqDao.entity(id))
            let result: any = await this.taskMcqDao.delete(data);
            let returnData = {
                id: id,
                message: "Removed Successfully"
            }
            return Promise.resolve(returnData);
        } catch (error) {
            return Promise.reject(error);
        }
    }

    async validate(item: TaskMcq) {
        return true;
    }
}
