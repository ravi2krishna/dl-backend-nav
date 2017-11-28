import { getEntityManager, Repository } from "typeorm";
import { Role } from "./../entities/Role";

export class RoleDAO {

    private dao: Repository<Role>;

    constructor() {
        this.dao = getEntityManager().getRepository(Role);
    }

    search(data: any) {
        return this.dao.find(data, {
            alias: "role", 
        });
    }

    save(data: Role) {
        return this.dao.persist(data);
    }

    entity(id: string) {
        return this.dao.findOneById(id, {
            alias: "role", 
        });
    }

    delete(data: Role) {
        return this.dao.remove([data]);
    }

    findOne(data: any) {
        return this.dao.findOne(data, {
            alias: "role", 
        });
    }

}

Object.seal(RoleDAO);
