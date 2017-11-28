import { getEntityManager, Repository } from "typeorm";
import { TopicLink } from "./../entities/TopicLink";

export class TopicLinkDAO {

    private dao: Repository<TopicLink>;

    constructor() {
        this.dao = getEntityManager().getRepository(TopicLink);
    }

    search(data: any) {
        return this.dao.find(data, {
            alias: "type_link",
            innerJoinAndSelect: {
                "topic": "type_link.topic"
            }
        });
    }

    save(data: TopicLink) {
        return this.dao.persist(data);
    }

    entity(id: string) {
        return this.dao.findOneById(id, {
            alias: "type_link",
        });
    }

    delete(data: TopicLink) {
        return this.dao.remove([data]);
    }

    findOne(data: any) {
        return this.dao.findOne(data, {
            alias: "type_link",
        });
    }

}

Object.seal(TopicLinkDAO);
