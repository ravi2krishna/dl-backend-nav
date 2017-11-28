import { App } from "./../utils/App";
import { BatchUser } from "./../entities/BatchUser";
import { BatchUserDAO } from "./../dao/BatchUserDAO";

export class BatchUserService {
    private batchUserDao: BatchUserDAO;


    constructor() {
        this.batchUserDao = new BatchUserDAO();

    }

    async entity(id: string) {
        try {
            let data: any = await this.batchUserDao.entity(id);
            return Promise.resolve(data);
        } catch (error) {
            return Promise.reject(error);
        }
    }

    async retrieve(query) {
        try {
            let returnData = {
                students: [],
                trainers: []
            };
            let bmData: any = await this.batchUserDao.search(query);
            for (var i = 0; i < bmData.length; i++) {
                console.log(bmData[i].user.role.id)
                switch (bmData[i].user.role.id) {
                    case 'ROLE_STUDENT':
                        returnData.students.push(bmData[i]);
                        break;
                    case 'ROLE_TRAINER':
                        returnData.trainers.push(bmData[i]);
                        break;
                    default: break;
                }
            }
            return Promise.resolve(returnData)
        } catch (error) {
            return Promise.reject(error);
        }
    }

    async search(reqData: any) {
        try {
            let data: any = await this.batchUserDao.search(reqData);
            return Promise.resolve(data)
        } catch (error) {
            return Promise.reject(error);
        }
    }

    async save(item: any) {
        try {
            let users = item.users;
            var count = 0;
            // users.forEach(async user => {
            //     let bucheck = await this.batchUserDao.search({ user: user.id, batch: item.batch.id })
            //     if (true) {
            //         let uid = App.UniqueNumber();
            //         let batchuser = {
            //             id: uid,
            //             user: user,
            //             batch: item.batch
            //         }
            //         let batchUserData: any = await this.batchUserDao.save(batchuser);
            //     }
            // });
            for (var k = 0; k < users.length; k++) {
                let bucheck = await this.batchUserDao.search({ user: users[k].id, batch: item.batch.id })
                if (bucheck.length == 0) {
                    let uid = App.UniqueNumber();
                    let batchuser = {
                        id: uid,
                        user: users[k],
                        batch: item.batch
                    }
                    let batchUserData: any = await this.batchUserDao.save(batchuser);
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
            let data: BatchUser = (await this.batchUserDao.entity(id))
            let result: any = await this.batchUserDao.delete(data);
            let returnData = {
                id: id,
                message: "Removed Successfully"
            }
            return Promise.resolve(returnData);
        } catch (error) {
            return Promise.reject(error);
        }
    }

    async validate(item: BatchUser) {
        return true;
    }
}
