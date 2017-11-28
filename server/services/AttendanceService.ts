import { App } from "./../utils/App";
import { Attendance } from "./../entities/Attendance";
import { AttendanceDAO } from "./../dao/AttendanceDAO";

export class AttendanceService {
    private attendanceDao: AttendanceDAO;


    constructor() {
        this.attendanceDao = new AttendanceDAO();

    }

    async entity(id: string) {
        try {
            let data: any = await this.attendanceDao.entity(id);
            return Promise.resolve(data);
        } catch (error) {
            return Promise.reject(error);
        }
    }

    async search(reqData: any) {
        try {
            let data: any = await this.attendanceDao.search(reqData);
            return Promise.resolve(data)
        } catch (error) {
            return Promise.reject(error);
        }
    }

    async save(item: Attendance) {
        try {
            if (this.validate(item)) {
                let uid = App.UniqueNumber();
                if (!item.id || item.id == '' || item.id == '0') {
                    item.id = uid;
                }
                let attendanceData: any = await this.attendanceDao.save(item);
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
            let data: Attendance = (await this.attendanceDao.entity(id))
            let result: any = await this.attendanceDao.delete(data);
            let returnData = {
                id: id,
                message: "Removed Successfully"
            }
            return Promise.resolve(returnData);
        } catch (error) {
            return Promise.reject(error);
        }
    }

    async validate(item: Attendance) {
        return true;
    }
}
