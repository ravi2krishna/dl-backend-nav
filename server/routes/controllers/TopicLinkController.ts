import { Router, Request, Response } from "express";
import { App } from "../../utils/App";
import { TopicLinkService } from "../../services/TopicLinkService";

export class TopicLinkController {

    private router: Router = Router();
    private topicLinkService = new TopicLinkService();

    getRouter(): Router {
        this.router.post("/", async (request: Request, response: Response) => {
            let reqData = request.body ? request.body.data : {};
            const result = this.topicLinkService.search(reqData);
            App.Send(request, response, result);

        });
        this.router.put("/", async (request: Request, response: Response) => {
            let reqData = request.body ? request.body.data : null;
            let result = this.topicLinkService.save(reqData);
            App.Send(request, response, result);
        });

        this.router.get("/:id", async (request: Request, response: Response) => {
            const id: any = request.params.id;
            const result = this.topicLinkService.entity(id);
            App.Send(request, response, result);
        });

        this.router.delete("/:id", async (request: Request, response: Response) => {
            const id: any = request.params.id;
            const result = this.topicLinkService.delete(id);
            App.Send(request, response, result);
        });

        return this.router;
    }
}
