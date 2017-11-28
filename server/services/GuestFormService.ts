import { UserDAO } from './../dao/UserDAO';
import { User } from './../entities/User';
import { AddressDAO } from './../dao/AddressDAO';
import { App } from "./../utils/App";
import { GuestForm } from "./../entities/GuestForm";
import { GuestFormDAO } from "./../dao/GuestFormDAO";
import { ImgDAO } from "./../dao/ImgDAO";

export class GuestFormService {
    private guestFormDao: GuestFormDAO;
    private addressDao: AddressDAO;
    private userDao: UserDAO;
    private imgDao: ImgDAO;

    constructor() {
        this.guestFormDao = new GuestFormDAO();
        this.userDao= new UserDAO();
        this.addressDao= new AddressDAO();
        this.imgDao = new ImgDAO();
    }

    async entity(id: string) {
        try {
            let data: any = await this.guestFormDao.entity(id);
            return Promise.resolve(data);
        } catch (error) {
            return Promise.reject(error);
        }
    }

    async search(reqData: any) {
        console.log(reqData);
        try {
            let data: any = await this.guestFormDao.search(reqData);
            
            return Promise.resolve(data)
        } catch (error) {
            return Promise.reject(error);
        }
    }

    async save(item: GuestForm) {
        try {
            
            if (this.validate(item)) {
                let uid = App.UniqueNumber();
                if(!item.id || item.id == '' || item.id == '0') {
                    item.id = uid;
                    item.user.id = uid;
                    item.user.address.id=uid;
                    item.img.id = uid;
                }
                

                await this.addressDao.save(item.user.address);
                await this.userDao.save(item.user);
                await this.imgDao.save(item.img);
            
                let guestFormData: any = await this.guestFormDao.save(item);
                let returnData = {
                    id: item.id,
                    message: "Saved Successfully"
                }
                console.log(guestFormData);
                
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
            let data: GuestForm = (await this.guestFormDao.entity(id))
            let result: any = await this.guestFormDao.delete(data);
            let returnData = {
                id: id,
                message: "Removed Successfully"
            }
            return Promise.resolve(returnData);
        } catch (error) {
            return Promise.reject(error);
        }
    }

    async validate(item: GuestForm){
        return true;
    }
}