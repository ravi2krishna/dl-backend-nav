import { getEntityManager, Repository } from "typeorm";
import { SalesTxn } from "./../entities/SalesTxn";

export class SalesTxnDAO {

    private dao: Repository<SalesTxn>;

    constructor() {
        this.dao = getEntityManager().getRepository(SalesTxn);
    }

    search(data: any) {
        return this.dao.find(data, {
            alias: "salesTxn", 
            innerJoinAndSelect: { 
                "sales": "salesTxn.sales",
             
            
                "product": "salesTxn.product",
            },   
        });
    }

    save(data: SalesTxn) {
        return this.dao.persist(data);
    }

    entity(id: string) {
        return this.dao.findOneById(id, {
            alias: "salesTxn", 
            innerJoinAndSelect: { 
                "sales": "salesTxn.sales",
             
            
                "product": "salesTxn.product",
            },   
        });
    }

    delete(data: SalesTxn) {
        return this.dao.remove([data]);
    }

    findOne(data: any) {
        return this.dao.findOne(data, {
            alias: "salesTxn", 
            innerJoinAndSelect: {
                 "sales": "salesTxn.sales",
             
             "product": "salesTxn.product",
            },  
        });
    }

}

Object.seal(SalesTxnDAO);
