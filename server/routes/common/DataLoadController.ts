import { Router, Request, Response } from "express";
import { App } from "../../utils/App";
import { DataLoadService } from "../../services/common/DataLoadService";

export class DataLoadController {

    private router: Router = Router();

    getRouter(): Router {
        this.router.get("/:category", async (request: Request, response: Response) => {
            const category = request.params.category;
            const service = new DataLoadService();
            let result = null;
            switch (category) {
                case 'codes': result = service.codes();
                    break;
                case 'roles': result = service.roles(request);
                    break;
                case 'branches': result = service.branch(request);
                    break;
                case 'timings': result = service.timing(request);
                    break;
                case 'batchtypes': result = service.batchtype(request);
                    break;
                case 'courses': result = service.course(request);
                    break;
                case 'trainers': result = service.trainer(request);
                    break;
                case 'students': result = service.student(request);
                    break;
                case 'linktypes': result = service.linktype(request);
                    break;
                case 'topicstatus': result = service.topicstatus(request);
                    break;
                case 'topics': result = service.topics(request);
                    break;
                case 'default': result = null;
            }
            App.Send(request, response, result);
        });

        // this.router.get("/:category/:branch", async (request: Request, response: Response) => {
        //     const category = request.params.category;
        //     const branch = request.params.branch;
        //     const service = new DataLoadService();
        //     let result = null;
        //     switch (category) {
        //         case 'studentlist': result = service.branchStudentlist(branch);
        //             break;
        //         case 'trainerlist': result = service.branchTrainerlist(branch);
        //             break;
        //         case 'default': result = null;
        //     }
        //     App.Send(request, response, result);
        // })

        return this.router;
    }
}
