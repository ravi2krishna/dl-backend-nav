import { getEntityManager, Repository } from "typeorm";
import { Attendance } from "./../entities/Attendance";

export class AttendanceDAO {

    private dao: Repository<Attendance>;

    constructor() {
        this.dao = getEntityManager().getRepository(Attendance);
    }

    search(data: any) {
        return this.dao.find(data, {
            alias: "attendance", 
            innerJoinAndSelect: { 
                "user": "attendance.user",
            },   
        });
    }

    save(data: Attendance) {
        return this.dao.persist(data);
    }

    entity(id: string) {
        return this.dao.findOneById(id, {
            alias: "attendance", 
            innerJoinAndSelect: { 
                "user": "attendance.user",
            },   
        });
    }

    delete(data: Attendance) {
        return this.dao.remove([data]);
    }

    findOne(data: any) {
        return this.dao.findOne(data, {
            alias: "attendance", 
            innerJoinAndSelect: {
                 "user": "attendance.user",
            },  
        });
    }

}

Object.seal(AttendanceDAO);
