import { getEntityManager, Repository } from "typeorm";
import { CourseInstallment } from "./../entities/CourseInstallment";

export class CourseInstallmentDAO {

    private dao: Repository<CourseInstallment>;

    constructor() {
        this.dao = getEntityManager().getRepository(CourseInstallment);
    }

    search(data: any) {
        return this.dao.find(data, {
            alias: "courseInstallment", 
            innerJoinAndSelect: { 
                "courseDetails": "courseInstallment.courseDetails",
            },   
        });
    }

    save(data: CourseInstallment) {
        return this.dao.persist(data);
    }

    entity(id: string) {
        return this.dao.findOneById(id, {
            alias: "courseInstallment", 
            innerJoinAndSelect: { 
                "courseDetails": "courseInstallment.courseDetails",
            },   
        });
    }

    delete(data: CourseInstallment) {
        return this.dao.remove([data]);
    }

    findOne(data: any) {
        return this.dao.findOne(data, {
            alias: "courseInstallment", 
            innerJoinAndSelect: {
                 "courseDetails": "courseInstallment.courseDetails",
            },  
        });
    }

}

Object.seal(CourseInstallmentDAO);
