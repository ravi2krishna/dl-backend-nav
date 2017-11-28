import { App } from "./../utils/App";
import { Menu } from "./../entities/Menu";
import { MenuDAO } from "./../dao/MenuDAO";
import { LinkDAO } from "./../dao/LinkDAO";

export class MenuService {
    private menuDao: MenuDAO;
    private linkDao: LinkDAO;


    constructor() {
        this.menuDao = new MenuDAO();
        this.linkDao = new LinkDAO();

    }

    async entity(id: string) {
        try {
            let data: any = await this.menuDao.entity(id);
            return Promise.resolve(data);
        } catch (error) {
            return Promise.reject(error);
        }
    }

    async search(reqData: any) {
        try {
            let data: any = await this.menuDao.search(reqData);
            return Promise.resolve(data)
        } catch (error) {
            return Promise.reject(error);
        }
    }

    // async save(item: Menu) {
    //     try {
    //         if (this.validate(item)) {
    //             let uid = App.UniqueNumber();
    //             if (!item.id || item.id == '' || item.id == '0') {
    //                 item.id = uid;
    //             }
    //
    //             let menuData: any = await this.menuDao.save(item);
    //             let returnData = {
    //                 id: item.id,
    //                 message: "Saved Successfully"
    //             }
    //             return Promise.resolve(returnData);
    //         } else {
    //             let returnData = {
    //                 message: "Please enter proper values."
    //             }
    //             return Promise.reject(returnData);
    //         }
    //
    //     } catch (error) {
    //         return Promise.reject(error);
    //     }
    // }
    async save(item: any) {
        try {
            console.log(item)
            let links = item.link;
            var count = 0;

            for (var k = 0; k < links.length; k++) {
                let lcheck = await this.menuDao.search({ link: links[k].id, role: item.role.id })
                if (lcheck.length == 0) {
                    let uid = App.UniqueNumber();
                    let menuD = {
                        id: uid,
                        link: links[k],
                        active: item.active,

                        role: item.role
                    }
                    let menuData: any = await this.menuDao.save(menuD);
                    count++;
                }
            }
            let returnData = {
                message: count + " users added to batch successfully"
            }
            return Promise.resolve(returnData);
        } catch (error) {
            return Promise.reject(error);
        }
    }

    async delete(id: any) {
        try {
            let data: Menu = (await this.menuDao.entity(id))
            let result: any = await this.menuDao.delete(data);
            let returnData = {
                id: id,
                message: "Removed Successfully"
            }
            return Promise.resolve(returnData);
        } catch (error) {
            return Promise.reject(error);
        }
    }

    async validate(item: Menu) {
        return true;
    }
}
