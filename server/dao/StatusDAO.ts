import { getEntityManager, Repository } from "typeorm";
import { Status } from "./../entities/Status";

export class StatusDAO {

    private dao: Repository<Status>;

    constructor() {
        this.dao = getEntityManager().getRepository(Status);
    }

    search(data: any) {
        return this.dao.find(data, {
            alias: "status", 
        });
    }

    save(data: Status) {
        return this.dao.persist(data);
    }

    entity(id: string) {
        return this.dao.findOneById(id, {
            alias: "status", 
        });
    }

    delete(data: Status) {
        return this.dao.remove([data]);
    }

    findOne(data: any) {
        return this.dao.findOne(data, {
            alias: "status", 
        });
    }

}

Object.seal(StatusDAO);
