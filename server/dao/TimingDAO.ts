import { getEntityManager, Repository } from "typeorm";
import { Timing } from "./../entities/Timing";

export class TimingDAO {

    private dao: Repository<Timing>;

    constructor() {
        this.dao = getEntityManager().getRepository(Timing);
    }

    search(data: any) {
        return this.dao.find(data, {
            alias: "timing", 
        });
    }

    save(data: Timing) {
        return this.dao.persist(data);
    }

    entity(id: string) {
        return this.dao.findOneById(id, {
            alias: "timing", 
        });
    }

    delete(data: Timing) {
        return this.dao.remove([data]);
    }

    findOne(data: any) {
        return this.dao.findOne(data, {
            alias: "timing", 
        });
    }

}

Object.seal(TimingDAO);
