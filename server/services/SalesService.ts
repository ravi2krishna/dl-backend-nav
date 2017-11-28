import { App } from "./../utils/App";
import { Sales } from "./../entities/Sales";
import { SalesDAO } from "./../dao/SalesDAO";

export class SalesService {
    private salesDao: SalesDAO;
    

    constructor() {
        this.salesDao = new SalesDAO();
        
    }

    async entity(id: string) {
        try {
            let data: any = await this.salesDao.entity(id);
            return Promise.resolve(data);
        } catch (error) {
            return Promise.reject(error);
        }
    }

    async search(reqData: any) {
        try {
            let data: any = await this.salesDao.search(reqData);
            return Promise.resolve(data)
        } catch (error) {
            return Promise.reject(error);
        }
    }

    async save(item: Sales) {
        try {
            if (this.validate(item)) {
                let uid = App.UniqueNumber();
                if(!item.id || item.id == '' || item.id == '0') {
                    item.id = uid;
                }
                
                let salesData: any = await this.salesDao.save(item);
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
            let data: Sales = (await this.salesDao.entity(id))
            let result: any = await this.salesDao.delete(data);
            let returnData = {
                id: id,
                message: "Removed Successfully"
            }
            return Promise.resolve(returnData);
        } catch (error) {
            return Promise.reject(error);
        }
    }

    async validate(item: Sales){
        return true;
    }
}