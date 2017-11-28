import { getEntityManager, Repository } from "typeorm";
import { Product } from "./../entities/Product";

export class ProductDAO {

    private dao: Repository<Product>;

    constructor() {
        this.dao = getEntityManager().getRepository(Product);
    }

    search(data: any) {
        return this.dao.find(data, {
            alias: "product", 
        });
    }

    save(data: Product) {
        return this.dao.persist(data);
    }

    entity(id: string) {
        return this.dao.findOneById(id, {
            alias: "product", 
        });
    }

    delete(data: Product) {
        return this.dao.remove([data]);
    }

    findOne(data: any) {
        return this.dao.findOne(data, {
            alias: "product", 
        });
    }

}

Object.seal(ProductDAO);
