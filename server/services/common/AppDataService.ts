import { Branch } from './../../entities/Branch';
import { RoleDAO } from './../../dao/RoleDAO';
import { getEntityManager, Repository, QueryBuilder } from "typeorm";
import * as url from "url";
import { UserDAO } from "../../dao/UserDAO";
import { CourseDAO } from "../../dao/CourseDAO";
import { BranchDAO } from "../../dao/BranchDAO";
import { Role } from "../../entities/Role";

export class AppDataService {
    private accountDao: UserDAO;
    private courseDao: CourseDAO;
    private branchDao: BranchDAO;
    private roleDao: RoleDAO;
    private branchmanager = getEntityManager().getRepository(Branch);
    private rolemanager = getEntityManager().getRepository(Role);

    constructor() {
        this.accountDao = new UserDAO();
        this.courseDao = new CourseDAO();
        this.branchDao = new BranchDAO();
        this.roleDao = new RoleDAO();
    }

    async codes() {
        try {
            let data: any = [];
            data.push({ key: "ROLE", name: "Roles" })
            return Promise.resolve(data)
        } catch (error) {
            return Promise.reject(error);
        }
    }

    async roles(request) {
        try {
            // console.log(url.parse(request.url).query.includes("active="));
            if (url.parse(request.url).query && url.parse(request.url).query.includes("active=")) {
                let bool = url.parse(request.url).query.split("active=")[1];
                console.log(bool)
                if (bool == "true") {
                    var activeValue = 1;
                } else {
                    var activeValue = 0;
                }
                let data = await this.rolemanager.createQueryBuilder("role")
                    .where("role.active LIKE :keyword", { keyword: activeValue })
                    .select(['id', 'name', 'code', 'active']).execute();
                data = JSON.parse(JSON.stringify(data));
                return Promise.resolve(data)
            } else {
                let data = await this.rolemanager.createQueryBuilder("role")
                    .select(['id', 'name', 'code', 'active']).execute();
                data = JSON.parse(JSON.stringify(data));
                return Promise.resolve(data)
            }
        } catch (error) {
            return Promise.reject(error);
        }
    }

    async branch(request) {
        try {
            if (url.parse(request.url).query && url.parse(request.url).query.includes("active=")) {
                let bool = url.parse(request.url).query.split("active=")[1];
                if (bool == "true") {
                    var activeValue = 1;
                } else {
                    var activeValue = 0;
                }
                let data = await this.branchmanager.createQueryBuilder("branch")
                    .where("branch.active LIKE :keyword", { keyword: activeValue })
                    .select(['id', 'name', 'title', 'active']).execute();
                data = JSON.parse(JSON.stringify(data));
                return Promise.resolve(data)
            } else {
                let data = await this.branchmanager.createQueryBuilder("branch")
                    .select(['id', 'name', 'title', 'active']).execute();
                data = JSON.parse(JSON.stringify(data));
                return Promise.resolve(data)
            }
        } catch (error) {
            return Promise.reject(error);
        }
    }

}
