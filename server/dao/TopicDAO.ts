import { getEntityManager, Repository } from "typeorm";
import { Topic } from "./../entities/Topic";

export class TopicDAO {

    private dao: Repository<Topic>;

    constructor() {
        this.dao = getEntityManager().getRepository(Topic);
    }

    search(data: any) {
        return this.dao.find(data, {
            alias: "topic",
            innerJoinAndSelect: {
                "course": "topic.course"
                // "courseimg": "course.img"
            },
        });
    }

    searchnull(id: string) {
        return this.dao.find({ course: id, parent_topic_id: null }, {
            alias: "topic",
            innerJoinAndSelect: {
                "course": "topic.course",
            },
        });
    }

    save(data: Topic) {
        return this.dao.persist(data);
    }

    entity(id: string) {
        return this.dao.findOneById(id, {
            alias: "topic",
            innerJoinAndSelect: {
                "course": "topic.course",
            },
        });
    }

    delete(data: Topic) {
        return this.dao.remove([data]);
    }

    findOne(data: any) {
        return this.dao.findOne(data, {
            alias: "topic",
            innerJoinAndSelect: {
                "course": "topic.course",
            },
        });
    }

}

Object.seal(TopicDAO);
