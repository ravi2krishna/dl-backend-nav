import { UserDAO } from "../../dao/UserDAO";
import { MenuDAO } from "../../dao/MenuDAO";
import { BranchDAO } from "../../dao/BranchDAO";
import { UserService } from "../UserService";
import { User } from "../../entities/User";

import { App } from "../../utils/App"
export class AuthService {
    private userDAO: UserDAO;
    private menuDAO: MenuDAO;
    private userService: UserService;
    private branchDAO: BranchDAO;
    private providers: any;

    constructor() {
        this.userDAO = new UserDAO();
        this.menuDAO = new MenuDAO();
        this.userService = new UserService();
        this.branchDAO = new BranchDAO();
        this.providers = {
            email: 'email',
            facebook: 'facebook',
            google: 'google',
            linkedin: 'linkedin'
        };
    };

    retrieve(reqData: any) {
        switch (reqData.provider) {
            case 'email': {
                return this.sendEmailResponse(reqData);
            }
            case 'facebook': {
                return this.sendSocailResponse(reqData);
            }
            case 'google': {
                return this.sendSocailResponse(reqData);
            }
            case 'linkedin': {
                return this.sendSocailResponse(reqData);
            }
            default: {
                return this.sendEmailResponse(reqData);
            }
        }
    };

    async signup(reqData: any) {
        const newAccount: any = {};
        newAccount.id = null;
        newAccount.role = { id: "ROLE_NA", code: "NA" };
        newAccount.branch = { id: "DL_MAIN_BRANCH", code: "NA" };
        newAccount.password = "0";
        newAccount.address = {};
        newAccount.address.country = "India";
        newAccount.email = reqData.email;
        if (reqData.password) {
            newAccount.password = reqData.password;
        }
        if (reqData.name) {
            newAccount.name = reqData.name;
        } else {
            newAccount.name = reqData.email.substring(0, reqData.email.indexOf('@'));
        }
        try {
            return this.userService.save(newAccount).then(results => {
                return this.retrieve({ email: reqData.email, password: reqData.password, provider: "email" })
            }).catch(error => {
                return Promise.reject(error);
            })
        } catch (error) {
            return Promise.reject(error);
        }

    }

    async reteriveUserDetails(email: string) {
        try {
            var responseData: any = {};
            var accountObj: any = await this.userDAO.findOne({ email: email });
            if (accountObj != null) {
                responseData.user = {};
                responseData.user.id = accountObj.id;
                responseData.user.role = accountObj.role.id;
                responseData.user.name = accountObj.name;
                responseData.user.email = accountObj.email;
                responseData.user.mobile = accountObj.mobile;

                var menuAccessObj = await this.menuDAO.search({ role: accountObj.role.id });
                responseData.menuList = [];
                if (menuAccessObj != null) {
                    menuAccessObj.forEach((element: any) => {
                        responseData.menuList.push(element.link);
                    });
                }
                var branch: any = await this.branchDAO.entity(accountObj.branch.id);
                if (branch) {
                    responseData.branch = {};
                    responseData.branch.id = branch.id;
                    responseData.branch.name = branch.name;
                }
                else {
                    return Promise.reject({ message: "Error in retreving menu access items " });
                }
            }
            else {
                return Promise.reject({ message: "Didn't find any profile with the provided email " });
            }
            return Promise.resolve(responseData);
        }
        catch (error) {
            return Promise.reject(error);
        }
    }

    async sendEmailResponse(reqData: any) {
        var responseData: any = {};
        var userObj: any = await this.userDAO.search({ email: reqData.email, password: reqData.password });
        userObj = userObj[0];
        if (userObj != null) {
            if (userObj.active == true) {
                return this.reteriveUserDetails(reqData.email);
            } else {
                return Promise.reject({ message: "Account De-activated Contact Admin" })
            }

        } else {
            return Promise.reject({ message: "Email or Password Mismatch" });
        }
    };

    async sendSocailResponse(reqData: any) {
        try {
            var responseData: any = {};
            var userObj: any = await this.userDAO.search({ email: reqData.email });
            userObj = userObj[0];
            if (userObj != null) {
                return this.reteriveUserDetails(reqData.email);
            } else {
                return this.signup(reqData);
            }
        }
        catch (error) {
            return Promise.reject(error);
        }
    };

}
