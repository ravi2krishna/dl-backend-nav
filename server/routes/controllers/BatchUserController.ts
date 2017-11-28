import { Router, Request, Response } from "express";
import { App } from "../../utils/App";
import { BatchUserService } from "../../services/BatchUserService";

export class BatchUserController {

    private router: Router = Router();
    private batchUserService = new BatchUserService();

    getRouter(): Router {
        this.router.post("/", async (request: Request, response: Response) => {
            let reqData = request.body ? request.body.data : {};
            const result = this.batchUserService.retrieve(reqData);
            App.Send(request, response, result);

        });

        this.router.post("/user", async (request: Request, response: Response) => {
            let reqData = request.body ? request.body.data : {};
            const result = this.batchUserService.retrieve(reqData);
            App.Send(request, response, result);

        });

        this.router.put("/", async (request: Request, response: Response) => {
            let reqData = request.body ? request.body.data : null;
            let result = this.batchUserService.save(reqData);
            App.Send(request, response, result);
        });

        this.router.get("/:id", async (request: Request, response: Response) => {
            const id: any = request.params.id;
            const result = this.batchUserService.entity(id);
            App.Send(request, response, result);
        });

        this.router.delete("/:id", async (request: Request, response: Response) => {
            const id: any = request.params.id;
            const result = this.batchUserService.delete(id);
            App.Send(request, response, result);
        });

        return this.router;
    }
}
