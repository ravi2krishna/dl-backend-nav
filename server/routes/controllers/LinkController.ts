import { Router, Request, Response } from "express";
import { App } from "../../utils/App";
import { LinkService } from "../../services/LinkService";

export class LinkController {

    private router: Router = Router();
    private linkService = new LinkService();

    getRouter(): Router {
        this.router.post("/", async (request: Request, response: Response) => {
            let reqData = request.body ? request.body.data : {};
            const result = this.linkService.search(reqData);
            App.Send(request, response, result);

        });
        this.router.put("/", async (request: Request, response: Response) => {
            let reqData = request.body ? request.body.data : null;
            let result = this.linkService.save(reqData);
            App.Send(request, response, result);
        });

        this.router.get("/:id", async (request: Request, response: Response) => {
            const id: any = request.params.id;
            const result = this.linkService.entity(id);
            App.Send(request, response, result);
        });

        this.router.delete("/:id", async (request: Request, response: Response) => {
            const id: any = request.params.id;
            const result = this.linkService.delete(id);
            App.Send(request, response, result);
        });

        return this.router;
    }
}
