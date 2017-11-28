import { App } from "./../utils/App";
import { Course } from "./../entities/Course";
import { CourseDAO } from "./../dao/CourseDAO";
import { ImgDAO } from "./../dao/ImgDAO";
import { BatchUserDAO } from "./../dao/BatchUserDAO";
import { BatchDAO } from "./../dao/BatchDAO";

export class CourseService {
    private courseDao: CourseDAO;
    private imgDao: ImgDAO;
    private batchUserDao: BatchUserDAO;
    private batchDao: BatchDAO;

    constructor() {
        this.courseDao = new CourseDAO();
        this.imgDao = new ImgDAO();
        this.batchUserDao = new BatchUserDAO();
        this.batchDao = new BatchDAO();
    }

    async entity(id: string) {
        try {
            let data: any = await this.courseDao.entity(id);
            return Promise.resolve(data);
        } catch (error) {
            return Promise.reject(error);
        }
    }

    async search(reqData: any) {
        try {
            let data: any = await this.courseDao.search(reqData);
            return Promise.resolve(data)
        } catch (error) {
            return Promise.reject(error);
        }
    }

    async save(item: Course) {
        try {
            if (this.validate(item)) {
                let uid = App.UniqueNumber();
                if (!item.id || item.id == '' || item.id == '0') {
                    item.id = uid;
                    item.img.id = uid;
                }
                let imageData: any = await this.imgDao.save(item.img);
                let courseData: any = await this.courseDao.save(item);
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

    async user(item: any) {
        try {
            let batchUserData: any = await this.batchUserDao.user({ user: item.user });
            let courseData = [];
            let list = [];
            for (let k = 0; k < batchUserData.length; k++) {
                let data = JSON.parse(JSON.stringify(batchUserData[k]))
                let obj = data.batch.course;
                // list.push(obj.name);
                if (list.indexOf(obj.name) == -1) {
                    list.push(obj.name);
                    courseData.push(obj);
                }
            }
            return Promise.resolve(courseData);
        } catch (error) {
            return Promise.reject(error)
        }
    }

    async batch(item: any) {
        try {
            let batchUserData: any = await this.batchUserDao.batch({ user: item.user });
            let batchData = [];
            batchUserData.forEach(ls => {
                let data = JSON.parse(JSON.stringify(ls))
                if (ls.batch.course.id == item.course && ls.batch.active == true) {
                    batchData.push(ls.batch)
                }
            })
            return Promise.resolve(batchData);
        } catch (error) {
            return Promise.reject(error)
        }
    }

    async delete(id: any) {
        try {
            let data: Course = (await this.courseDao.entity(id))
            data.active = false;
            let result: any = await this.courseDao.save(data);
            let returnData = {
                id: id,
                message: "Removed Successfully"
            }
            return Promise.resolve(returnData);
        } catch (error) {
            return Promise.reject(error);
        }
    }

    async validate(item: Course) {
        return true;
    }
}
