import { Router, Request, Response } from "express";
import { App } from "../../utils/App";
import { BatchService } from "../../services/BatchService";

export class BatchController {

    private router: Router = Router();
    private batchService = new BatchService();

    getRouter(): Router {
        this.router.post("/", async (request: Request, response: Response) => {
            let reqData = request.body ? request.body.data : {};
            const result = this.batchService.search(reqData);
            App.Send(request, response, result);

        });

        this.router.post("/user", async (request: Request, response: Response) => {
            let reqData = request.body ? request.body.data : {};
            const result = this.batchService.user(reqData);
            App.Send(request, response, result);

        });

        this.router.put("/", async (request: Request, response: Response) => {
            let reqData = request.body ? request.body.data : null;
            let result = this.batchService.save(reqData);
            App.Send(request, response, result);
        });

        this.router.get("/:id", async (request: Request, response: Response) => {
            const id: any = request.params.id;
            const result = this.batchService.entity(id);
            App.Send(request, response, result);
        });

        this.router.delete("/:id", async (request: Request, response: Response) => {
            const id: any = request.params.id;
            const result = this.batchService.delete(id);
            App.Send(request, response, result);
        });

        return this.router;
    }
}
