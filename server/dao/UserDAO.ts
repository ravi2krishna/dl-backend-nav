import { getEntityManager, Repository } from "typeorm";
import { User } from "./../entities/User";


export class UserDAO {

    private dao: Repository<User>;

    constructor() {
        this.dao = getEntityManager().getRepository(User);
    }

    search(data: any) {
        return this.dao.find(data, {
            alias: "user",
            innerJoinAndSelect: {
                "branch": "user.branch",
                "address": "user.address",
                "role": "user.role"
            }
        });
    }

    user(data: any) {
        return this.dao.find(data, {
            alias: "user"
        });
    }

    save(data: User) {
        return this.dao.persist(data);
    }

    entity(id: string) {
        return this.dao.findOneById(id, {
            alias: "user",
            innerJoinAndSelect: {
                "branch": "user.branch",
                "address": "user.address",
                "branchaddress": "branch.address",
                "role": "user.role"
            }
        });
    }

    delete(data: User) {
        return this.dao.remove([data]);
    }

    findOne(data: any) {
        return this.dao.findOne(data, {
            alias: "user",
            innerJoinAndSelect: {
                "branch": "user.branch",
                "address": "user.address",
                "role": "user.role",
            }
        });
    }

}

Object.seal(UserDAO);
