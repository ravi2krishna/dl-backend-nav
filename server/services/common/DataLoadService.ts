import { Topic } from './../../entities/Topic';
import {TopicDAO} from "./../../dao/TopicDAO";
import { BatchType } from './../../entities/BatchType';
import { LinkType } from './../../entities/LinkType';
import { Branch } from './../../entities/Branch';
import {User} from "./../../entities/User";
import {Course} from "./../../entities/Course";
import { RoleDAO } from './../../dao/RoleDAO';
import {TimingDAO} from './../../dao/TimingDAO';
import { getEntityManager, Repository, QueryBuilder } from "typeorm";
import * as url from "url";
import { UserDAO } from "../../dao/UserDAO";
import { CourseDAO } from "../../dao/CourseDAO";
import { BranchDAO } from "../../dao/BranchDAO";
import {LinkTypeDAO} from "../../dao/LinkTypeDAO";
import { Role } from "../../entities/Role";
import {Timing} from "../../entities/Timing";
import {Status} from "../../entities/Status";

export class DataLoadService {

    private branchmanager;
    private rolemanager;
    private batchtypemanager;
    private linktypemanager;
    private coursemanager;
    private userDao: UserDAO;
    private timingmanager;
    private timingDao: TimingDAO;
    private topicstatusmanager;
    private topicmanager;
    private topicDao: TopicDAO;


    constructor() {
        this.branchmanager = getEntityManager().getRepository(Branch);
        this.rolemanager = getEntityManager().getRepository(Role);
        this.batchtypemanager = getEntityManager().getRepository(BatchType);
        this.linktypemanager = getEntityManager().getRepository(LinkType);
        this.coursemanager = getEntityManager().getRepository(Course);
        this.userDao = new UserDAO();
        this.timingDao = new TimingDAO();
        this.topicDao = new TopicDAO();
        this.timingmanager = getEntityManager().getRepository(Timing);
        this.topicstatusmanager = getEntityManager().getRepository(Status);
        this.topicmanager = getEntityManager().getRepository(Topic);
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
            return this.sth(request, this.rolemanager, "type_role", ['id', 'name', 'code']);
        } catch (error) {
            return Promise.reject(error);
        }
    }

    async branch(request) {
        try {
            return this.sth(request, this.branchmanager, "branch", ['id', 'name', 'title']);
        } catch (error) {
            return Promise.reject(error);
        }
    }

    async batchtype(request) {
        try {
            return this.sth(request, this.batchtypemanager, "type_batch", ['id', 'code', 'name']);
        } catch (error) {
            return Promise.reject(error)
        }
    }

    async linktype(request) {
        try {
            return this.sth(request, this.linktypemanager, "link_type", ['id', 'code', 'name']);
        } catch (error) {
            return Promise.reject(error)
        }
    }

    async course(request) {
        try {
            return this.sth(request, this.coursemanager, "course", ['id', 'name']);
        } catch (error) {
            return Promise.reject(error)
        }
    }

    async trainer(request) {
        try {
            return this.userDao.user({ role: "ROLE_TRAINER" });
        } catch (error) {
            return Promise.reject(error)
        }
    }

    async student(request) {
        try {
            return this.userDao.user({ role: "ROLE_STUDENT" });
        } catch (error) {
            return Promise.reject(error)
        }
    }

    async timing(request) {
        try {
            return this.sth(request, this.timingmanager, "timing", ['id', 'name'])
        }
        catch (error) {
            return Promise.reject(error);
        }
    }

    async topicstatus(request) {
        try {
            return this.sth(request, this.topicstatusmanager, "status", ['id', 'name'])
        }
        catch (error) {
            return Promise.reject(error);
        }
    }

    async topics(request) {
        try {
            return this.topicDao.searchnull(request.query.course);
        }
        catch (error) {
            return Promise.reject(error);
        }
    }

    async sth(request, manager, table, fields) {
        if (url.parse(request.url).query && url.parse(request.url).query.includes("active=")) {
            let bool = url.parse(request.url).query.split("active=")[1];
            if (bool == "true") {
                var activeValue = 1;
            } else {
                var activeValue = 0;
            }
            let data = await manager.createQueryBuilder(table)
                .where("active LIKE :keyword", { keyword: activeValue })
                .select(fields).execute();
            data = JSON.parse(JSON.stringify(data));
            return Promise.resolve(data)
        } else {
            let data = await manager.createQueryBuilder(table)
                .select(fields).execute();
            data = JSON.parse(JSON.stringify(data));
            return Promise.resolve(data)
        }
    }

    async coursequery(request, manager, table, fields) {
        if (url.parse(request.url).query && url.parse(request.url).query.includes("course=")) {
            let id = url.parse(request.url).query.split("course=")[1];
            let data = await manager.createQueryBuilder(table)
                .where("course LIKE :keyword", { keyword: id })
                .select(fields).execute();
            data = JSON.parse(JSON.stringify(data));
            return Promise.resolve(data)
        } else {
            let data = await manager.createQueryBuilder(table)
                .select(fields).execute();
            data = JSON.parse(JSON.stringify(data));
            return Promise.resolve(data)
        }
    }
}
