import { getEntityManager, Repository } from "typeorm";
import { Task } from "./../entities/Task";

export class TaskDAO {

    private dao: Repository<Task>;

    constructor() {
        this.dao = getEntityManager().getRepository(Task);
    }

    search(data: any) {
        return this.dao.find(data, {
            alias: "task",
            innerJoinAndSelect: {
                "userProfile": "task.userProfile",
                "topic": "task.topic",
                "batch": "task.batch",
            },
        });
    }

    save(data: Task) {
        return this.dao.persist(data);
    }

    entity(id: string) {
        return this.dao.findOneById(id, {
            alias: "task",
            innerJoinAndSelect: {
                "userProfile": "task.userProfile",
                "topic": "task.topic",
                "batch": "task.batch",
            },
        });
    }

    delete(data: Task) {
        return this.dao.remove([data]);
    }

    findOne(data: any) {
        return this.dao.findOne(data, {
            alias: "task",
            innerJoinAndSelect: {
                "userProfile": "task.userProfile",
                "topic": "task.topic",
                "batch": "task.batch",
            },
        });
    }

}

Object.seal(TaskDAO);
