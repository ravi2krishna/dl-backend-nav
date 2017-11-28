import { App } from "./../utils/App";
import { User } from "./../entities/User";
import { UserDAO } from "./../dao/UserDAO";
import { RoleDAO } from "./../dao/RoleDAO";
import { Address } from "./../entities/Address";

import { AddressDAO } from "./../dao/AddressDAO";

export class UserService {
    private userDao: UserDAO;
    private roleDao: RoleDAO;
    private addressDAO: AddressDAO;


    constructor() {
        this.userDao = new UserDAO();
        this.roleDao = new RoleDAO();
        this.addressDAO = new AddressDAO();

    }

    async entity(id: string) {
        try {
            let data: any = await this.userDao.entity(id);
            return Promise.resolve(data);
        } catch (error) {
            return Promise.reject(error);
        }
    }

    async search(reqData: any) {
        try {
            let data: any = await this.userDao.search(reqData);
            return Promise.resolve(data)
        } catch (error) {
            return Promise.reject(error);
        }
    }

    async tracker(reqData: any) {
        try {
            let data: any = await this.search(reqData);

        } catch (error) {
            return Promise.reject(error);
        }
    }

    async save(item: User) {
        try {
            if (this.validate(item)) {
                let data = await this.userDao.search({ email: item.email });
                if (item.id != null && data.length > 0) {
                    let addressData = await this.addressDAO.save(item.address);
                    let userData: any = await this.userDao.save(item);
                    let returnData = {
                        id: item.id,
                        message: "Saved Successfully"
                    }
                    return Promise.resolve(returnData);
                } else if (item.id == null && data.length > 0) {
                    return Promise.resolve({ message: "Email Already Exits" });
                } else {
                    let uid = App.UniqueNumber();
                    if (!item.id || item.id == '' || item.id == '0') {
                        item.id = uid;
                        item.address.id = uid;
                    }

                    let addressData = await this.addressDAO.save(item.address);
                    let userData: any = await this.userDao.save(item);
                    let returnData = {
                        id: item.id,
                        message: "Saved Successfully"
                    }
                    return Promise.resolve(returnData);
                }
            } else {
                let returnData = {
                    message: "Please enter proper values."
                }
                return Promise.reject(returnData);
            }

        } catch (error) {
            return Promise.reject(error);
        }
    }

    async delete(id: any) {
        try {
            let data: User = (await this.userDao.entity(id))
            data.active = false;
            let result: any = await this.userDao.save(data);
            let returnData = {
                id: id,
                message: "Removed Successfully"
            }
            return Promise.resolve(returnData);
        } catch (error) {
            return Promise.reject(error);
        }
    }

    async validate(item: User) {
        return true;
    }
}
