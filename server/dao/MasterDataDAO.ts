import { getEntityManager, Repository } from "typeorm";
import { MasterData } from "./../entities/MasterData";

export class MasterDataDAO {

    private dao: Repository<MasterData>;

    constructor() {
        this.dao = getEntityManager().getRepository(MasterData);
    }

    search(data: any) {
        return this.dao.find(data, {
            alias: "masterData", 
        });
    }

    save(data: MasterData) {
        return this.dao.persist(data);
    }

    entity(id: string) {
        return this.dao.findOneById(id, {
            alias: "masterData", 
        });
    }

    delete(data: MasterData) {
        return this.dao.remove([data]);
    }

    findOne(data: any) {
        return this.dao.findOne(data, {
            alias: "masterData", 
        });
    }

}

Object.seal(MasterDataDAO);
