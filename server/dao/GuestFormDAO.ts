import { getEntityManager, Repository } from "typeorm";
import { GuestForm } from "./../entities/GuestForm";

export class GuestFormDAO {

    private dao: Repository<GuestForm>;

    constructor() {
        this.dao = getEntityManager().getRepository(GuestForm);
    }

    search(data: any) {
        return this.dao.find(data, {
            alias: "guestForm", 
            innerJoinAndSelect: { 
                "user": "guestForm.user",
                "user.branch": "user.branch",
                "user.address": "user.address",
                "user.role": "user.role"
            },   
        });
    }

    save(data: GuestForm) {
        return this.dao.persist(data);
    }

    entity(id: string) {
        return this.dao.findOneById(id, {
            alias: "guestForm", 
            innerJoinAndSelect: { 
                "user": "guestForm.user",
                "user.branch": "user.branch",
                "user.address": "user.address",
                "user.role": "user.role",
                "img": "guestForm.img"
            },   
        });
    }

    delete(data: GuestForm) {
        return this.dao.remove([data]);
    }

    findOne(data: any) {
        return this.dao.findOne(data, {
            alias: "guestForm", 
            innerJoinAndSelect: {
                "user": "guestForm.user",
                "user.branch": "user.branch",
                "user.address": "user.address",
                "user.role": "user.role"
            },  
        });
    }

}

Object.seal(GuestFormDAO);
