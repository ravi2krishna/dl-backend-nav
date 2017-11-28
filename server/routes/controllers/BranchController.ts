import { Router, Request, Response } from "express";
import { App } from "../../utils/App";
import { BranchService } from "../../services/BranchService";

export class BranchController {

    private router: Router = Router();
    private branchService = new BranchService();

    getRouter(): Router {
        this.router.post("/", async (request: Request, response: Response) => {
            console.log("hi")
            let reqData = request.body ? request.body.data : {};
            const result = this.branchService.search(reqData);
            App.Send(request, response, result);

        });
        this.router.put("/", async (request: Request, response: Response) => {
            let reqData = request.body ? request.body.data : null;
            let result = this.branchService.save(reqData);
            App.Send(request, response, result);
        });

        this.router.get("/:id", async (request: Request, response: Response) => {
            const id: any = request.params.id;
            const result = this.branchService.entity(id);
            App.Send(request, response, result);
        });

        this.router.delete("/:id", async (request: Request, response: Response) => {
            const id: any = request.params.id;
            const result = this.branchService.delete(id);
            App.Send(request, response, result);
        });

        return this.router;
    }
}
