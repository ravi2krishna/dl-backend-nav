import { getEntityManager, Repository } from "typeorm";
import { Menu } from "./../entities/Menu";

export class MenuDAO {

    private dao: Repository<Menu>;

    constructor() {
        this.dao = getEntityManager().getRepository(Menu);
    }

    search(data: any) {
        return this.dao.find(data, {
            alias: "menu", 
            innerJoinAndSelect: { 
                "role": "menu.role",
             
            
                "link": "menu.link",
            },   
        });
    }

    save(data: Menu) {
        return this.dao.persist(data);
    }

    entity(id: string) {
        return this.dao.findOneById(id, {
            alias: "menu", 
            innerJoinAndSelect: { 
                "role": "menu.role",
            
            
                "link": "menu.link",
            },  
        });
    }

    delete(data: Menu) {
        return this.dao.remove([data]);
    }

    findOne(data: any) {
        return this.dao.findOne(data, {
            alias: "menu", 
            innerJoinAndSelect: {  "role": "menu.role",
             
             "link": "menu.link",
            },  
        });
    }

}

Object.seal(MenuDAO);
