import { getEntityManager, Repository, } from "typeorm";
import { BatchUser } from "./../entities/BatchUser";

export class BatchUserDAO {

    private dao: Repository<BatchUser>;

    constructor() {
        this.dao = getEntityManager().getRepository(BatchUser);
    }

    search(data: any) {
        return this.dao.find(data, {
            alias: "batchUser",
            innerJoinAndSelect: {
                "user": "batchUser.user",
                "batch": "batchUser.batch",
                "user.role": "user.role"
            },
        });
    }

    user(data: any) {
        return this.dao.find(data, {
            alias: "batchUser",
            innerJoinAndSelect: {
                "user": "batchUser.user",
                "user.role": "user.role",
                "user.branch": "user.branch",
                "batch": "batchUser.batch",
                "course": "batch.course",
            },
        });
    }

    batch(data: any) {
        return this.dao.find(data, {
            alias: "batchUser",
            innerJoinAndSelect: {
                "user": "batchUser.user",
                "batch": "batchUser.batch",
                "course": "batch.course",
            },
        });
    }

    save(data: BatchUser) {
        return this.dao.persist(data);
    }

    entity(id: string) {
        return this.dao.findOneById(id, {
            alias: "batchUser",
            innerJoinAndSelect: {
                "user": "batchUser.user",
                "batch": "batchUser.batch",
                "batchType": "batch.batchType",
                "user.branch": "user.branch",
                "course": "batch.course",
            },
        });
    }

    delete(data: BatchUser) {
        return this.dao.remove([data]);
    }

    findOne(data: any) {
        return this.dao.findOne(data, {
            alias: "batchUser",
            innerJoinAndSelect: {
                "user": "batchUser.user",

                "batch": "batchUser.batch",
            },
        });
    }

}

Object.seal(BatchUserDAO);
