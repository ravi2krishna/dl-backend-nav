import { App } from "./../utils/App";
import { MCQ } from "./../entities/MCQ";
import { MCQDAO } from "./../dao/MCQDAO";


export class MCQService {
    private mcqDao: MCQDAO;



    constructor() {
        this.mcqDao = new MCQDAO();
    }

    async entity(id: string) {
        try {
            let data: any = await this.mcqDao.entity(id);
            return Promise.resolve(data);
        } catch (error) {
            return Promise.reject(error);
        }
    }

    async search(reqData: any) {
        try {
            let data: any = await this.mcqDao.search(reqData);
            return Promise.resolve(data)
        } catch (error) {
            return Promise.reject(error);
        }
    }

    async save(item: MCQ) {
        try {
            let uid = App.UniqueNumber();
            if (!item.id || item.id == '' || item.id == '0') {
                item.id = uid;
            }
            let questionData = await this.mcqDao.save(item);
            let returnData = {
                id: item.id,
                message: "Saved Successfully"
            }
            return Promise.resolve(returnData);
        } catch (error) {
            return Promise.reject(error);
        }
    }

    async delete(id: any) {
        try {
            let data: MCQ = (await this.mcqDao.entity(id))
            data.active = false;
            let result: any = await this.mcqDao.save(data);
            let returnData = {
                id: id,
                message: "Removed Successfully"
            }
            return Promise.resolve(returnData);
        } catch (error) {
            return Promise.reject(error);
        }
    }

    async validate(item: MCQ) {
        return true;
    }
}
