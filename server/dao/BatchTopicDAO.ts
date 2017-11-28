import { getEntityManager, Repository } from "typeorm";
import { BatchTopic } from "./../entities/BatchTopic";

export class BatchTopicDAO {

    private dao: Repository<BatchTopic>;

    constructor() {
        this.dao = getEntityManager().getRepository(BatchTopic);
    }

    search(data: any) {
        return this.dao.find(data, {
            alias: "batchTopic", 
            innerJoinAndSelect: { 
                "batch": "batchTopic.batch",
             
            
                "status": "batchTopic.status",
             
            
                "topic": "batchTopic.topic",
            },   
        });
    }

    save(data: BatchTopic) {
        return this.dao.persist(data);
    }

    entity(id: string) {
        return this.dao.findOneById(id, {
            alias: "batchTopic", 
            innerJoinAndSelect: { 
                "batch": "batchTopic.batch",
             
            
                "status": "batchTopic.status",
             
            
                "topic": "batchTopic.topic",
            },   
        });
    }

    delete(data: BatchTopic) {
        return this.dao.remove([data]);
    }

    findOne(data: any) {
        return this.dao.findOne(data, {
            alias: "batchTopic", 
            innerJoinAndSelect: {
                 "batch": "batchTopic.batch",
             
             "status": "batchTopic.status",
             
             "topic": "batchTopic.topic",
            },  
        });
    }

}

Object.seal(BatchTopicDAO);
