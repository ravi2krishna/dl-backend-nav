import { Router, Request, Response } from "express";
import { App } from "../../utils/App";
import { BatchTimingService } from "../../services/BatchTimingService";

export class BatchTimingController {

    private router: Router = Router();
    private batchTimingService = new BatchTimingService();

    getRouter(): Router {
        this.router.post("/", async(request: Request, response: Response) => {
            let reqData= request.body ? request.body.data : {};
            const result = this.batchTimingService.search(reqData);
            App.Send(request, response, result);

        });
        this.router.put("/", async(request: Request, response: Response) => {
            let reqData= request.body ? request.body.data : null;
            let result = this.batchTimingService.save(reqData);
            App.Send(request, response, result);
        });

        this.router.get("/:id", async(request: Request,response:Response)=>{
            const id:any=request.params.id;
            const result = this.batchTimingService.entity(id);
            App.Send(request, response, result);
        });

        this.router.delete("/:id", async(request:Request,response:Response)=>{
            const id:any=request.params.id;
            const result = this.batchTimingService.delete(id);
            App.Send(request, response, result);
        });

        return this.router;
    }
}