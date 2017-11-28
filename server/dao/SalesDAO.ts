import { getEntityManager, Repository } from "typeorm";
import { Sales } from "./../entities/Sales";

export class SalesDAO {

    private dao: Repository<Sales>;

    constructor() {
        this.dao = getEntityManager().getRepository(Sales);
    }

    search(data: any) {
        return this.dao.find(data, {
            alias: "sales", 
            innerJoinAndSelect: { 
                "branch": "sales.branch",
             
            
                "user": "sales.user",
            },   
        });
    }

    save(data: Sales) {
        return this.dao.persist(data);
    }

    entity(id: string) {
        return this.dao.findOneById(id, {
            alias: "sales", 
            innerJoinAndSelect: { 
                "branch": "sales.branch",
             
            
                "user": "sales.user",
            },   
        });
    }

    delete(data: Sales) {
        return this.dao.remove([data]);
    }

    findOne(data: any) {
        return this.dao.findOne(data, {
            alias: "sales", 
            innerJoinAndSelect: {
                 "branch": "sales.branch",
             
             "user": "sales.user",
            },  
        });
    }

}

Object.seal(SalesDAO);
