import { getEntityManager, Repository } from "typeorm";
import { LinkType } from "./../entities/LinkType";

export class LinkTypeDAO {

    private dao: Repository<LinkType>;

    constructor() {
        this.dao = getEntityManager().getRepository(LinkType);
    }

    search(data: any) {
        return this.dao.find(data, {
            alias: "type_link",
        });
    }

    save(data: LinkType) {
        return this.dao.persist(data);
    }

    entity(id: string) {
        return this.dao.findOneById(id, {
            alias: "type_link",
        });
    }

    delete(data: LinkType) {
        return this.dao.remove([data]);
    }

    findOne(data: any) {
        return this.dao.findOne(data, {
            alias: "type_link",
        });
    }

}

Object.seal(LinkTypeDAO);
