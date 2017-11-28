import { App } from "./../utils/App";
import { Link } from "./../entities/Link";
import { LinkDAO } from "./../dao/LinkDAO";

export class LinkService {
    private linkDao: LinkDAO;


    constructor() {
        this.linkDao = new LinkDAO();

    }

    async entity(id: string) {
        try {
            let data: any = await this.linkDao.entity(id);
            return Promise.resolve(data);
        } catch (error) {
            return Promise.reject(error);
        }
    }

    async search(reqData: any) {
        try {
            let data: any = await this.linkDao.search(reqData);
            return Promise.resolve(data)
        } catch (error) {
            return Promise.reject(error);
        }
    }

    async save(item: Link) {
        try {
            if (this.validate(item)) {
                let uid = App.UniqueNumber();
                if (!item.id || item.id == '' || item.id == '0') {
                    item.id = uid;
                }

                let linkData: any = await this.linkDao.save(item);
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
            let data: Link = (await this.linkDao.entity(id));
            let result: any = await this.linkDao.delete(data);
            let returnData = {
                id: id,
                message: "Removed Successfully"
            }
            return Promise.resolve(returnData);
        } catch (error) {
            return Promise.reject(error);
        }
    }

    async validate(item: Link) {
        return true;
    }
}
