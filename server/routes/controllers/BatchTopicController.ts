import { Router, Request, Response } from "express";
import { App } from "../../utils/App";
import { BatchTopicService } from "../../services/BatchTopicService";

export class BatchTopicController {

    private router: Router = Router();
    private batchTopicService = new BatchTopicService();

    getRouter(): Router {
        this.router.post("/", async(request: Request, response: Response) => {
            let reqData= request.body ? request.body.data : {};
            const result = this.batchTopicService.search(reqData);
            App.Send(request, response, result);

        });
        this.router.put("/", async(request: Request, response: Response) => {
            let reqData= request.body ? request.body.data : null;
            let result = this.batchTopicService.save(reqData);
            App.Send(request, response, result);
        });

        this.router.get("/:id", async(request: Request,response:Response)=>{
            const id:any=request.params.id;
            const result = this.batchTopicService.entity(id);
            App.Send(request, response, result);
        });

        this.router.delete("/:id", async(request:Request,response:Response)=>{
            const id:any=request.params.id;
            const result = this.batchTopicService.delete(id);
            App.Send(request, response, result);
        });

        return this.router;
    }
}