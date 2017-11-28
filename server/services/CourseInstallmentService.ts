import { App } from "./../utils/App";
import { CourseInstallment } from "./../entities/CourseInstallment";
import { CourseInstallmentDAO } from "./../dao/CourseInstallmentDAO";

export class CourseInstallmentService {
    private courseInstallmentDao: CourseInstallmentDAO;
    

    constructor() {
        this.courseInstallmentDao = new CourseInstallmentDAO();
        
    }

    async entity(id: string) {
        try {
            let data: any = await this.courseInstallmentDao.entity(id);
            return Promise.resolve(data);
        } catch (error) {
            return Promise.reject(error);
        }
    }

    async search(reqData: any) {
        try {
            let data: any = await this.courseInstallmentDao.search(reqData);
            return Promise.resolve(data)
        } catch (error) {
            return Promise.reject(error);
        }
    }

    async save(item: CourseInstallment) {
        try {
            if (this.validate(item)) {
                let uid = App.UniqueNumber();
                if(!item.id || item.id == '' || item.id == '0') {
                    item.id = uid;
                }
                
                let courseInstallmentData: any = await this.courseInstallmentDao.save(item);
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
            let data: CourseInstallment = (await this.courseInstallmentDao.entity(id))
            let result: any = await this.courseInstallmentDao.delete(data);
            let returnData = {
                id: id,
                message: "Removed Successfully"
            }
            return Promise.resolve(returnData);
        } catch (error) {
            return Promise.reject(error);
        }
    }

    async validate(item: CourseInstallment){
        return true;
    }
}