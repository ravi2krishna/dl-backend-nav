import { getEntityManager, Repository } from "typeorm";
import { TaskMcq } from "./../entities/TaskMcq";

export class TaskMcqDAO {

    private dao: Repository<TaskMcq>;

    constructor() {
        this.dao = getEntityManager().getRepository(TaskMcq);
    }

    search(data: any) {
        return this.dao.find(data, {
            alias: "taskMcq",
            innerJoinAndSelect: {
                "mcq": "taskMcq.mcq",
                "task": "taskMcq.task",
                "topic": "task.topic"
            },
        });
    }

    save(data: TaskMcq) {
        return this.dao.persist(data);
    }

    entity(id: string) {
        return this.dao.findOneById(id, {
            alias: "taskMcq",
            innerJoinAndSelect: {
                "mcq": "taskMcq.mcq",
                "task": "taskMcq.task",
            },
        });
    }

    delete(data: TaskMcq) {
        return this.dao.remove([data]);
    }

    findOne(data: any) {
        return this.dao.findOne(data, {
            alias: "taskMcq",
            innerJoinAndSelect: {
                "mcq": "taskMcq.mcq",
                "task": "taskMcq.task",
            },
        });
    }

}

Object.seal(TaskMcqDAO);
