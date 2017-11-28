import { getEntityManager, Repository } from "typeorm";
import { MCQ } from "./../entities/MCQ";


export class MCQDAO {

    private dao: Repository<MCQ>;

    constructor() {
        this.dao = getEntityManager().getRepository(MCQ);
    }

    search(data: any) {
        return this.dao.find(data, {
            alias: "questions",
            innerJoinAndSelect: {
                "topic": "questions.topic",
            }
        });
    }

    user(data: any) {
        return this.dao.find(data, {
            alias: "questions"
        });
    }

    save(data: MCQ) {
        return this.dao.persist(data);
    }

    entity(id: string) {
        return this.dao.findOneById(id, {
            alias: "questions"
        });
    }

    delete(data: MCQ) {
        return this.dao.remove(data);
    }

    findOne(data: any) {
        return this.dao.findOne(data, {
            alias: "questions",
            innerJoinAndSelect: {
                "topic": "questions.topic",
            }
        });
    }

}

Object.seal(MCQDAO);
