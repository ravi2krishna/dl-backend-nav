import { getEntityManager, Repository } from "typeorm";
import { Link } from "./../entities/Link";

export class LinkDAO {

    private dao: Repository<Link>;

    constructor() {
        this.dao = getEntityManager().getRepository(Link);
    }

    search(data: any) {
        return this.dao.find(data, {
            alias: "link", 
        });
    }

    save(data: Link) {
        return this.dao.persist(data);
    }

    entity(id: string) {
        return this.dao.findOneById(id, {
            alias: "link", 
        });
    }

    delete(data: Link) {
        return this.dao.remove([data]);
    }

    findOne(data: any) {
        return this.dao.findOne(data, {
            alias: "link", 
        });
    }

}

Object.seal(LinkDAO);
