import { Router, Request, Response } from "express";
import { App } from "../../utils/App";
import { TaskMcqService } from "../../services/TaskMcqService";

export class TaskMcqController {

    private router: Router = Router();
    private taskMcqService = new TaskMcqService();

    getRouter(): Router {
        this.router.post("/", async (request: Request, response: Response) => {
            let reqData = request.body ? request.body.data : {};
            const result = this.taskMcqService.search(reqData);
            App.Send(request, response, result);

        });
        this.router.put("/", async (request: Request, response: Response) => {
            let reqData = request.body ? request.body.data : null;
            let result = this.taskMcqService.submit(reqData);
            App.Send(request, response, result);
        });

        this.router.get("/:id", async (request: Request, response: Response) => {
            const id: any = request.params.id;
            const result = this.taskMcqService.entity(id);
            App.Send(request, response, result);
        });

        this.router.delete("/:id", async (request: Request, response: Response) => {
            const id: any = request.params.id;
            const result = this.taskMcqService.delete(id);
            App.Send(request, response, result);
        });

        return this.router;
    }
}
