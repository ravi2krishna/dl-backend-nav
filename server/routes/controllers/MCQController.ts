import { Router, Request, Response } from "express";
import { App } from "../../utils/App";
import { MCQService } from "../../services/MCQService";

export class MCQController {

    private router: Router = Router();
    private mcqService = new MCQService();

    getRouter(): Router {
        this.router.post("/", async (request: Request, response: Response) => {
            let reqData = request.body ? request.body.data : {};
            const result = this.mcqService.search(reqData);
            App.Send(request, response, result);

        });
        this.router.put("/", async (request: Request, response: Response) => {
            let reqData = request.body ? request.body.data : null;
            let result = this.mcqService.save(reqData);
            App.Send(request, response, result);
        });

        this.router.get("/:id", async (request: Request, response: Response) => {
            const id: any = request.params.id;
            const result = this.mcqService.entity(id);
            App.Send(request, response, result);
        });

        this.router.delete("/:id", async (request: Request, response: Response) => {
            const id: any = request.params.id;
            const result = this.mcqService.delete(id);
            App.Send(request, response, result);
        });

        return this.router;
    }
}
