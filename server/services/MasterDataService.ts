import { App } from "./../utils/App";
import { MasterData } from "./../entities/MasterData";
import { MasterDataDAO } from "./../dao/MasterDataDAO";

export class MasterDataService {
    private masterDataDao: MasterDataDAO;
    

    constructor() {
        this.masterDataDao = new MasterDataDAO();
        
    }

    async entity(id: string) {
        try {
            let data: any = await this.masterDataDao.entity(id);
            return Promise.resolve(data);
        } catch (error) {
            return Promise.reject(error);
        }
    }

    async search(reqData: any) {
        try {
            let data: any = await this.masterDataDao.search(reqData);
            return Promise.resolve(data)
        } catch (error) {
            return Promise.reject(error);
        }
    }

    async save(item: MasterData) {
        try {
            if (this.validate(item)) {
                let uid = App.UniqueNumber();
                if(!item.id || item.id == '' || item.id == '0') {
                    item.id = uid;
                }
                
                let masterDataData: any = await this.masterDataDao.save(item);
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
            let data: MasterData = (await this.masterDataDao.entity(id))
            let result: any = await this.masterDataDao.delete(data);
            let returnData = {
                id: id,
                message: "Removed Successfully"
            }
            return Promise.resolve(returnData);
        } catch (error) {
            return Promise.reject(error);
        }
    }

    async validate(item: MasterData){
        return true;
    }
}