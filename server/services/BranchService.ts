import { App } from "./../utils/App";
import { Branch } from "./../entities/Branch";
import { BranchDAO } from "./../dao/BranchDAO";
import { Address } from "./../entities/Address";
import { AddressDAO } from "./../dao/AddressDAO";

export class BranchService {
    private branchDao: BranchDAO;

    private addressDAO: AddressDAO;


    constructor() {
        this.branchDao = new BranchDAO();

        this.addressDAO = new AddressDAO();

    }

    async entity(id: string) {
        try {
            let data: any = await this.branchDao.entity(id);
            return Promise.resolve(data);
        } catch (error) {
            return Promise.reject(error);
        }
    }

    async search(reqData: any) {
        try {
            let data: any = await this.branchDao.search(reqData);
            return Promise.resolve(data)
        } catch (error) {
            return Promise.reject(error);
        }
    }

    async save(item: Branch) {
        try {
            if (this.validate(item)) {
                let uid = App.UniqueNumber();
                if (!item.id || item.id == '' || item.id == '0') {
                    item.id = uid;
                    item.address.id = uid;

                }
                let addressData = await this.addressDAO.save(item.address);
                let branchData: any = await this.branchDao.save(item);
                let returnData = {
                    id: item.id,
                    message: "Saved Successfully"
                }
                return Promise.resolve(returnData);
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
            let data: Branch = (await this.branchDao.entity(id))
            data.active = false;
            let result: any = await this.branchDao.save(data);
            let returnData = {
                id: id,
                message: "Removed Successfully"
            }
            return Promise.resolve(returnData);
        } catch (error) {
            return Promise.reject(error);
        }
    }

    async validate(item: Branch) {
        return true;
    }
}
