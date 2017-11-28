import { Router, Request, Response } from "express";
import { App } from "../../utils/App";
import { BatchTopicLinkService } from "../../services/BatchTopicLinkService";

export class BatchTopicLinkController {

    private router: Router = Router();
    private batchTopicLinkService = new BatchTopicLinkService();

    getRouter(): Router {
        this.router.post("/", async (request: Request, response: Response) => {
            let reqData = request.body ? request.body.data : {};
            const result = this.batchTopicLinkService.search(reqData);
            App.Send(request, response, result);

        });
        this.router.put("/", async (request: Request, response: Response) => {
            let reqData = request.body ? request.body.data : null;
            let result = this.batchTopicLinkService.save(reqData);
            App.Send(request, response, result);
        });

        this.router.get("/:id", async (request: Request, response: Response) => {
            const id: any = request.params.id;
            const result = this.batchTopicLinkService.entity(id);
            App.Send(request, response, result);
        });

        this.router.delete("/:id", async (request: Request, response: Response) => {
            const id: any = request.params.id;
            const result = this.batchTopicLinkService.delete(id);
            App.Send(request, response, result);
        });

        return this.router;
    }
}
