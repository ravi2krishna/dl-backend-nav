import { App } from "./../utils/App";
import { Topic } from "./../entities/Topic";
import { TopicDAO } from "./../dao/TopicDAO";

export class TopicService {
    private topicDao: TopicDAO;


    constructor() {
        this.topicDao = new TopicDAO();

    }

    async entity(id: string) {
        try {
            let data: any = await this.topicDao.entity(id);
            return Promise.resolve(data);
        } catch (error) {
            return Promise.reject(error);
        }
    }

    async search(reqData: any) {
        try {
            let data: any = await this.topicDao.search(reqData);
            return Promise.resolve(data)
        } catch (error) {
            return Promise.reject(error);
        }
    }

    async save(item: Topic) {
        try {
            if (this.validate(item)) {
                let uid = App.UniqueNumber();
                if (!item.id || item.id == '' || item.id == '0') {
                    item.id = uid;
                }
                let topicData: any = await this.topicDao.save(item);
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
            let data: Topic = (await this.topicDao.entity(id))

            let result: any = await this.topicDao.delete(data);
            let returnData = {
                id: id,
                message: "Removed Successfully"
            }
            return Promise.resolve(returnData);
        } catch (error) {
            return Promise.reject(error);
        }
    }

    async validate(item: Topic) {
        return true;
    }
}
