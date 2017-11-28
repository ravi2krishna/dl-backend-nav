import { TaskController } from './controllers/TaskController';
import { CourseInstallmentController } from './controllers/CourseInstallmentController';
import { CourseDetailsController } from './controllers/CourseDetailsController';
import { GuestFormController } from './controllers/GuestFormController';
import { SalesTxnController } from './controllers/SalesTxnController';
import { SalesController } from './controllers/SalesController';
import { ProductController } from './controllers/ProductController';
import { MasterDataController } from './controllers/MasterDataController';
import { Router } from "express";
import { DataLoadController } from "./common/DataLoadController";
import { AuthController } from "./common/AuthController";
import { UserController } from "./controllers/UserController";
import { BranchController } from "./controllers/BranchController";
import { CourseController } from "./controllers/CourseController";
import { MenuController } from "./controllers/MenuController";
import { LinkController } from "./controllers/LinkController";
import { TopicController } from "./controllers/TopicController";
import { BatchController } from "./controllers/BatchController";
import { TopicLinkController } from "./controllers/TopicLinkController";
import { BatchTopicLinkController } from "./controllers/BatchTopicLinkController";
import { ImageController } from "./controllers/ImageController";
import { BatchUserController } from "./controllers/BatchUserController";
import { BatchTopicController } from "./controllers/BatchTopicController";
import { AttendanceController } from "./controllers/AttendanceController";
import { BatchTimingController } from './controllers/BatchTimingController';
import { MCQController } from './controllers/MCQController';

export class AppController {
    private router: Router = Router();

    getRouter() {
        this.router.use("/dataload", new DataLoadController().getRouter());
        this.router.use("/auth", new AuthController().getRouter());
        this.router.use("/user", new UserController().getRouter());
        this.router.use("/branch", new BranchController().getRouter());
        this.router.use("/course", new CourseController().getRouter());
        this.router.use("/menu", new MenuController().getRouter());
        this.router.use("/link", new LinkController().getRouter());
        this.router.use("/topic", new TopicController().getRouter());
        this.router.use("/batch", new BatchController().getRouter());
        this.router.use("/topiclink", new TopicLinkController().getRouter());
        this.router.use("/batchtopiclink", new BatchTopicLinkController().getRouter());
        this.router.use("/img", new ImageController().getRouter());
        this.router.use("/batchtiming", new BatchTimingController().getRouter());
        this.router.use("/batchuser", new BatchUserController().getRouter());
        this.router.use("/batchtopic", new BatchTopicController().getRouter());
        this.router.use("/attendance", new AttendanceController().getRouter());
        this.router.use("/mcq", new MCQController().getRouter());
        this.router.use("/masterdata", new MasterDataController().getRouter());
        this.router.use("/product", new ProductController().getRouter());
        this.router.use("/sales", new SalesController().getRouter());
        this.router.use("/salestxn", new SalesTxnController().getRouter());
        this.router.use("/guestform", new GuestFormController().getRouter());
        this.router.use("/coursedetails", new CourseDetailsController().getRouter());
        this.router.use("/courseinstallment", new CourseInstallmentController().getRouter());
        this.router.use("/task", new TaskController().getRouter());
        
        return this.router;
    }
}
