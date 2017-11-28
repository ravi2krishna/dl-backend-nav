import { getEntityManager, Repository } from "typeorm";
import { CourseDetails } from "./../entities/CourseDetails";

export class CourseDetailsDAO {

    private dao: Repository<CourseDetails>;

    constructor() {
        this.dao = getEntityManager().getRepository(CourseDetails);
    }

    search(data: any) {
        return this.dao.find(data, {
            alias: "courseDetails", 
            innerJoinAndSelect: { 
                "guestForm": "courseDetails.guestForm",
            },   
        });
    }

    save(data: CourseDetails) {
        return this.dao.persist(data);
    }

    entity(id: string) {
        return this.dao.findOneById(id, {
            alias: "courseDetails", 
            innerJoinAndSelect: { 
                "guestForm": "courseDetails.guestForm",
            },   
        });
    }

    delete(data: CourseDetails) {
        return this.dao.remove([data]);
    }

    findOne(data: any) {
        return this.dao.findOne(data, {
            alias: "courseDetails", 
            innerJoinAndSelect: {
                 "guestForm": "courseDetails.guestForm",
            },  
        });
    }

}

Object.seal(CourseDetailsDAO);
