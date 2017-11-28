import { App } from "./../utils/App";
import { SalesTxn } from "./../entities/SalesTxn";
import { SalesTxnDAO } from "./../dao/SalesTxnDAO";

export class SalesTxnService {
    private salesTxnDao: SalesTxnDAO;
    

    constructor() {
        this.salesTxnDao = new SalesTxnDAO();
        
    }

    async entity(id: string) {
        try {
            let data: any = await this.salesTxnDao.entity(id);
            return Promise.resolve(data);
        } catch (error) {
            return Promise.reject(error);
        }
    }

    async search(reqData: any) {
        try {
            let data: any = await this.salesTxnDao.search(reqData);
            return Promise.resolve(data)
        } catch (error) {
            return Promise.reject(error);
        }
    }

    async save(item: SalesTxn) {
        try {
            if (this.validate(item)) {
                let uid = App.UniqueNumber();
                if(!item.id || item.id == '' || item.id == '0') {
                    item.id = uid;
                }
                
                let salesTxnData: any = await this.salesTxnDao.save(item);
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
            let data: SalesTxn = (await this.salesTxnDao.entity(id))
            let result: any = await this.salesTxnDao.delete(data);
            let returnData = {
                id: id,
                message: "Removed Successfully"
            }
            return Promise.resolve(returnData);
        } catch (error) {
            return Promise.reject(error);
        }
    }

    async validate(item: SalesTxn){
        return true;
    }
}