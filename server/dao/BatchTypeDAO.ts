import { getEntityManager, Repository } from "typeorm";
import { BatchType } from "./../entities/BatchType";

export class BatchTypeDAO {

    private dao: Repository<BatchType>;

    constructor() {
        this.dao = getEntityManager().getRepository(BatchType);
    }

    search(data: any) {
        return this.dao.find(data, {
            alias: "batchType", 
        });
    }

    save(data: BatchType) {
        return this.dao.persist(data);
    }

    entity(id: string) {
        return this.dao.findOneById(id, {
            alias: "batchType", 
        });
    }

    delete(data: BatchType) {
        return this.dao.remove([data]);
    }

    findOne(data: any) {
        return this.dao.findOne(data, {
            alias: "batchType", 
        });
    }

}

Object.seal(BatchTypeDAO);
