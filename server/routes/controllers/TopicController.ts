import { Router, Request, Response } from "express";
import { App } from "../../utils/App";
import { TopicService } from "../../services/TopicService";

export class TopicController {

    private router: Router = Router();
    private topicService = new TopicService();

    getRouter(): Router {
        this.router.post("/", async (request: Request, response: Response) => {
            let reqData = request.body ? request.body.data : {};
            const result = this.topicService.search(reqData);
            App.Send(request, response, result);

        });

        this.router.post("/subtopic", async (request: Request, response: Response) => {
            let reqData = request.body ? request.body.data : {};
            const result = this.topicService.search(reqData);
            App.Send(request, response, result);

        });

        this.router.put("/", async (request: Request, response: Response) => {
            let reqData = request.body ? request.body.data : null;
            let result = this.topicService.save(reqData);
            App.Send(request, response, result);
        });

        this.router.get("/:id", async (request: Request, response: Response) => {
            const id: any = request.params.id;
            const result = this.topicService.entity(id);
            App.Send(request, response, result);
        });

        this.router.delete("/:id", async (request: Request, response: Response) => {
            const id: any = request.params.id;
            const result = this.topicService.delete(id);
            App.Send(request, response, result);
        });

        return this.router;
    }
}
