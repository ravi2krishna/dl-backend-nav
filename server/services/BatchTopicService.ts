import { App } from "./../utils/App";
import { BatchTopic } from "./../entities/BatchTopic";
import { BatchTopicDAO } from "./../dao/BatchTopicDAO";

export class BatchTopicService {
    private batchTopicDao: BatchTopicDAO;


    constructor() {
        this.batchTopicDao = new BatchTopicDAO();

    }

    async entity(id: string) {
        try {
            let data: any = await this.batchTopicDao.entity(id);
            return Promise.resolve(data);
        } catch (error) {
            return Promise.reject(error);
        }
    }

    async search(reqData: any) {
        try {
            let data: any = await this.batchTopicDao.search(reqData);
            return Promise.resolve(data)
        } catch (error) {
            return Promise.reject(error);
        }
    }

    async save(item: BatchTopic) {
        try {
            if (this.validate(item)) {
                let uid = App.UniqueNumber();
                if (!item.id || item.id == '' || item.id == '0') {
                    item.id = uid;
                }
                let batchTopicData: any = await this.batchTopicDao.save(item);
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

    async delete(id: any) {
        try {
            let data: BatchTopic = (await this.batchTopicDao.entity(id))
            let result: any = await this.batchTopicDao.delete(data);
            let returnData = {
                id: id,
                message: "Removed Successfully"
            }
            return Promise.resolve(returnData);
        } catch (error) {
            return Promise.reject(error);
        }
    }

    async validate(item: BatchTopic) {
        return true;
    }
}
