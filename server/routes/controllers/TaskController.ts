import { Router, Request, Response } from "express";
import { App } from "../../utils/App";
import { TaskService } from "../../services/TaskService";

export class TaskController {

    private router: Router = Router();
    private taskService = new TaskService();

    getRouter(): Router {
        this.router.post("/", async (request: Request, response: Response) => {
            let reqData = request.body ? request.body.data : {};
            const result = this.taskService.search(reqData);
            App.Send(request, response, result);

        });

        this.router.put("/generate", async (request: Request, response: Response) => {
            let reqData = request.body ? request.body.data : null;
            let result = this.taskService.save(reqData);
            App.Send(request, response, result);
        });

        this.router.put("/submit", async (request: Request, response: Response) => {
            let reqData = request.body ? request.body.data : null;
            let result = this.taskService.submit(reqData);
            App.Send(request, response, result);
        });

        this.router.post("/student", async (request: Request, response: Response) => {
            let reqData = request.body ? request.body.data : null;
            let result = this.taskService.studentTask(reqData);
            App.Send(request, response, result);
        });

        this.router.get("/:id", async (request: Request, response: Response) => {
            const id: any = request.params.id;
            const result = this.taskService.entity(id);
            App.Send(request, response, result);
        });

        this.router.delete("/:id", async (request: Request, response: Response) => {
            const id: any = request.params.id;
            const result = this.taskService.delete(id);
            App.Send(request, response, result);
        });

        return this.router;
    }
}
