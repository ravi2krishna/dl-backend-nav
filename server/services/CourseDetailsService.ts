import { App } from "./../utils/App";
import { CourseDetails } from "./../entities/CourseDetails";
import { CourseDetailsDAO } from "./../dao/CourseDetailsDAO";

export class CourseDetailsService {
    private courseDetailsDao: CourseDetailsDAO;
    

    constructor() {
        this.courseDetailsDao = new CourseDetailsDAO();
        
    }

    async entity(id: string) {
        try {
            let data: any = await this.courseDetailsDao.entity(id);
            return Promise.resolve(data);
        } catch (error) {
            return Promise.reject(error);
        }
    }

    async search(reqData: any) {
        try {
            let data: any = await this.courseDetailsDao.search(reqData);
            return Promise.resolve(data)
        } catch (error) {
            return Promise.reject(error);
        }
    }

    async save(item: CourseDetails) {
        try {
            if (this.validate(item)) {
                let uid = App.UniqueNumber();
                if(!item.id || item.id == '' || item.id == '0') {
                    item.id = uid;
                }
                
                let courseDetailsData: any = await this.courseDetailsDao.save(item);
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
            let data: CourseDetails = (await this.courseDetailsDao.entity(id))
            let result: any = await this.courseDetailsDao.delete(data);
            let returnData = {
                id: id,
                message: "Removed Successfully"
            }
            return Promise.resolve(returnData);
        } catch (error) {
            return Promise.reject(error);
        }
    }

    async validate(item: CourseDetails){
        return true;
    }
}