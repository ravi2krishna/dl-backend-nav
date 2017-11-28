import { App } from "./../utils/App";
import { BatchTopicLink } from "./../entities/BatchTopicLink";
import { BatchTopicLinkDAO } from "./../dao/BatchTopicLinkDAO";

export class BatchTopicLinkService {
    private batchTopicLinkDao: BatchTopicLinkDAO;


    constructor() {
        this.batchTopicLinkDao = new BatchTopicLinkDAO();

    }

    async entity(id: string) {
        try {
            let data: any = await this.batchTopicLinkDao.entity(id);
            return Promise.resolve(data);
        } catch (error) {
            return Promise.reject(error);
        }
    }

    async search(reqData: any) {
        try {
            let data: any = await this.batchTopicLinkDao.search(reqData);
            return Promise.resolve(data)
        } catch (error) {
            return Promise.reject(error);
        }
    }

    async save(item: BatchTopicLink) {
        try {
            if (this.validate(item)) {
                let uid = App.UniqueNumber();
                if (!item.id || item.id == '' || item.id == '0') {
                    item.id = uid;
                }

                let linkData: any = await this.batchTopicLinkDao.save(item);
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
            let data: BatchTopicLink = (await this.batchTopicLinkDao.entity(id));
            let result: any = await this.batchTopicLinkDao.delete(data);
            let returnData = {
                id: id,
                message: "Removed Successfully"
            }
            return Promise.resolve(returnData);
        } catch (error) {
            return Promise.reject(error);
        }
    }

    async validate(item: BatchTopicLink) {
        return true;
    }
}
