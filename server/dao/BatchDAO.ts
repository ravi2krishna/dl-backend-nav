import { getEntityManager, Repository } from "typeorm";
import { Batch } from "./../entities/Batch";

export class BatchDAO {

    private dao: Repository<Batch>;

    constructor() {
        this.dao = getEntityManager().getRepository(Batch);
    }

    search(data: any) {
        return this.dao.find(data, {
            alias: "batch",
            innerJoinAndSelect: {
                "batchType": "batch.batchType",
                "course": "batch.course",
                "branch": "batch.branch",
            },
        });
    }

    // usersearch(){
    //     return this.dao.query()
    // }

    save(data: Batch) {
        return this.dao.persist(data);
    }

    entity(id: string) {
        return this.dao.findOneById(id, {
            alias: "batch",
            innerJoinAndSelect: {
                "batchType": "batch.batchType",
                "course": "batch.course",
                "branch": "batch.branch",
            },
        });
    }

    delete(data: Batch) {
        return this.dao.remove([data]);
    }

    findOne(data: any) {
        return this.dao.findOne(data, {
            alias: "batch",
            innerJoinAndSelect: {
                "batchType": "batch.batchType",
                "course": "batch.course",
                "branch": "batch.branch",
            },
        });
    }

}

Object.seal(BatchDAO);
