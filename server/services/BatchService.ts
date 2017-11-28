import { StatusDAO } from './../dao/StatusDAO';
import { BatchTopicService } from './BatchTopicService';
import { BatchTopicDAO } from './../dao/BatchTopicDAO';
import { TopicDAO } from './../dao/TopicDAO';
import { App } from "./../utils/App";
import { Batch } from "./../entities/Batch";
import { BatchDAO } from "./../dao/BatchDAO";
import { BatchUserDAO } from "./../dao/BatchUserDAO";
import { UserDAO } from "./../dao/UserDAO";


export class BatchService {
    private batchDao: BatchDAO;
    private batchuserDao: BatchUserDAO;
    private userDao: UserDAO;
    private topicDao: TopicDAO;
    private btservice = new BatchTopicService();
    private statusDao: StatusDAO;

    constructor() {
        this.batchDao = new BatchDAO();
        this.batchuserDao = new BatchUserDAO();
        this.userDao = new UserDAO();
        this.topicDao = new TopicDAO();
        this.statusDao = new StatusDAO();
    }

    async entity(id: string) {
        try {
            let data: any = await this.batchDao.entity(id);
            return Promise.resolve(data);
        } catch (error) {
            return Promise.reject(error);
        }
    }

    async user(item: any) {
        try {
            let batchUser: any = JSON.parse(JSON.stringify(await this.batchuserDao.user({ user: item.user })));
            let batchUserData = [];
            for (let i = 0; i < batchUser.length; i++) {
                if (batchUser[i].batch.active == true) {
                    batchUserData.push(batchUser[i])
                }
            }

            var courseData = [];
            for (var i = 0; i < batchUserData.length; i++) {
                batchUserData[i].count = await this.count(batchUserData[i].batch.id);
            }
            return Promise.resolve(batchUserData);
        } catch (error) {
            return Promise.reject(error)
        }
    }

    async search(reqData: any) {
        try {
            reqData.active = 1;
            var data: any = JSON.parse(JSON.stringify(await this.batchDao.search(reqData)));
            for (var i = 0; i < data.length; i++) {
                // let count = {
                //     students: 0,
                //     trainers: 0
                // }
                // let batchusers: any = await this.batchuserDao.search({ batch: data[i].id })
                // for (var j = 0; j < batchusers.length; j++) {
                //     let user: any = await this.userDao.entity(batchusers[j].user.id);
                //     switch (user.role.code) {
                //         case 'STUDENT':
                //             count.students++;
                //             break;
                //         case 'TRAINER':
                //             count.trainers++;
                //             break;
                //         default:
                //             break;
                //     }
                // };
                data[i].count = await this.count(data[i].id);
            }
            return Promise.resolve(data)
        } catch (error) {
            return Promise.reject(error);
        }
    }

    async save(item: Batch) {
        try {
            if (this.validate(item)) {
                let data = await this.batchDao.search({ name: item.name });
                if (item.id != null && data.length > 0) {
                    let batchData: any = await this.batchDao.save(item);
                    let returnData = {
                        id: item.id,
                        message: "Saved Successfully"
                    }
                    return Promise.resolve(returnData);
                } else if (item.id == null && data.length > 0) {
                    return Promise.resolve({ message: "Batch Name Already Exits" });
                } else {
                    let uid = App.UniqueNumber();
                    if (!item.id || item.id == '' || item.id == '0') {
                        item.id = uid;
                    }
                    let batchData: any = await this.batchDao.save(item);
                    let topicData: any = await this.topicDao.search({ course: batchData.course.id })
                    let status: any = await this.statusDao.findOne({ id: "notstarted" });
                    for (var j = 0; j < topicData.length; j++) {
                        this.btservice.save({
                            batch: batchData,
                            topic: topicData[j],
                            status: status
                        });
                    }
                    let returnData = {
                        id: item.id,
                        message: "Saved Successfully"
                    }
                    return Promise.resolve(returnData);
                }
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

    async delete(id: any) {
        try {
            let data: Batch = (await this.batchDao.entity(id))
            data.active = false;
            let result: any = await this.batchDao.save(data);
            let returnData = {
                id: id,
                message: "De-Activated Successfully"
            }
            return Promise.resolve(returnData);
        } catch (error) {
            return Promise.reject(error);
        }
    }

    async validate(item: Batch) {
        return true;
    }

    async count(id) {
        let batchdata: any = JSON.parse(JSON.stringify(await this.batchDao.entity(id)));
        var count = {
            students: 0,
            trainers: 0
        }
        let batchusers: any = await this.batchuserDao.search({ batch: id })
        for (var j = 0; j < batchusers.length; j++) {
            let user: any = await this.userDao.entity(batchusers[j].user.id);
            switch (user.role.name) {
                case 'Student':
                    count.students++;
                    break;
                case 'Trainer':
                    count.trainers++;
                    break;
                default:
                    break;
            }
        };
        return count;
    }
}
