import { getEntityManager, Repository } from "typeorm";
import { Course } from "./../entities/Course";

export class CourseDAO {

    private dao: Repository<Course>;

    constructor() {
        this.dao = getEntityManager().getRepository(Course);
    }

    search(data: any) {
        return this.dao.find(data, {
            alias: "course",

        });
    }

    save(data: Course) {
        return this.dao.persist(data);
    }

    entity(id: string) {
        return this.dao.findOneById(id, {
            alias: "course",

        });
    }

    delete(data: Course) {
        return this.dao.remove([data]);
    }

    findOne(data: any) {
        return this.dao.findOne(data, {
            alias: "course",

        });
    }

}

Object.seal(CourseDAO);
