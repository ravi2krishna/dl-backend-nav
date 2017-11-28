import { getEntityManager, Repository } from "typeorm";
import { BatchTiming } from "./../entities/BatchTiming";

export class BatchTimingDAO {

    private dao: Repository<BatchTiming>;

    constructor() {
        this.dao = getEntityManager().getRepository(BatchTiming);
    }

    search(data: any) {
        return this.dao.find(data, {
            alias: "batchTiming",
            innerJoinAndSelect: {
                "batch": "batchTiming.batch",
                "course": "batch.course",
                "user": "batchTiming.user",
            },
        });
    }

    save(data: BatchTiming) {
        return this.dao.persist(data);
    }

    entity(id: string) {
        return this.dao.findOneById(id, {
            alias: "batchTiming",
            innerJoinAndSelect: {
                "batch": "batchTiming.batch",
                "course": "batch.course",
                "user": "batchTiming.user",
            },
        });
    }

    delete(data: BatchTiming) {
        return this.dao.remove([data]);
    }

    findOne(data: any) {
        return this.dao.findOne(data, {
            alias: "batchTiming",
            innerJoinAndSelect: {
                "batch": "batchTiming.batch",
                "course": "batch.course",
                "user": "batchTiming.user",
            },
        });
    }

}

Object.seal(BatchTimingDAO);
