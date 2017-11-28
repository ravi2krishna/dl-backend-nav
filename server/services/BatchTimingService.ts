import { App } from "./../utils/App";
import { BatchTiming } from "./../entities/BatchTiming";
import { BatchTimingDAO } from "./../dao/BatchTimingDAO";

export class BatchTimingService {
    private batchTimingDao: BatchTimingDAO;


    constructor() {
        this.batchTimingDao = new BatchTimingDAO();
    }

    async entity(id: string) {
        try {
            let data: any = await this.batchTimingDao.entity(id);
            return Promise.resolve(data);
        } catch (error) {
            return Promise.reject(error);
        }
    }

    async search(reqData: any) {
        try {
            let data: any = await this.batchTimingDao.search(reqData);
            return Promise.resolve(data)
        } catch (error) {
            return Promise.reject(error);
        }
    }

    async save(item: BatchTiming) {
        try {
            if (this.validate(item)) {
                let uid = App.UniqueNumber();
                if (!item.id || item.id == '' || item.id == '0') {
                    item.id = uid;
                }
                let batchTimingData: any = await this.batchTimingDao.save(item);
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
            let data: BatchTiming = (await this.batchTimingDao.entity(id))
            let result: any = await this.batchTimingDao.delete(data);
            let returnData = {
                id: id,
                message: "Removed Successfully"
            }
            return Promise.resolve(returnData);
        } catch (error) {
            return Promise.reject(error);
        }
    }

    async validate(item: BatchTiming) {
        return true;
    }
}
