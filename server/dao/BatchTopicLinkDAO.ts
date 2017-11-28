import { getEntityManager, Repository } from "typeorm";
import { BatchTopicLink } from "./../entities/BatchTopicLink";

export class BatchTopicLinkDAO {

    private dao: Repository<BatchTopicLink>;

    constructor() {
        this.dao = getEntityManager().getRepository(BatchTopicLink);
    }

    search(data: any) {
        return this.dao.find(data, {
            alias: "batch_topic_link",
            innerJoinAndSelect: {
                "batchTopic": "batch_topic_link.batchTopic",
                "linkType": "batch_topic_link.linkType"
            }
        });
    }

    save(data: BatchTopicLink) {
        return this.dao.persist(data);
    }

    entity(id: string) {
        return this.dao.findOneById(id, {
            alias: "batch_topic_link",
            innerJoinAndSelect: {
                "batchTopic": "batch_topic_link.batchTopic",
                "linkType": "batch_topic_link.linkType"
            }
        });
    }

    delete(data: BatchTopicLink) {
        return this.dao.remove([data]);
    }

    findOne(data: any) {
        return this.dao.findOne(data, {
            alias: "batch_topic_link",
            innerJoinAndSelect: {
                "batchTopic": "batch_topic_link.batchTopic",
                "linkType": "batch_topic_link.linkType"
            }
        });
    }

}

Object.seal(BatchTopicLinkDAO);
