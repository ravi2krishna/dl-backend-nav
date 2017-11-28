import { Router, Request, Response } from "express";
import { App } from "../../utils/App";
import { SalesService } from "../../services/SalesService";

export class SalesController {

    private router: Router = Router();
    private salesService = new SalesService();

    getRouter(): Router {
        this.router.post("/", async(request: Request, response: Response) => {
            let reqData= request.body ? request.body.data : {};
            const result = this.salesService.search(reqData);
            App.Send(request, response, result);

        });
        this.router.put("/", async(request: Request, response: Response) => {
            let reqData= request.body ? request.body.data : null;
            let result = this.salesService.save(reqData);
            App.Send(request, response, result);
        });

        this.router.get("/:id", async(request: Request,response:Response)=>{
            const id:any=request.params.id;
            const result = this.salesService.entity(id);
            App.Send(request, response, result);
        });

        this.router.delete("/:id", async(request:Request,response:Response)=>{
            const id:any=request.params.id;
            const result = this.salesService.delete(id);
            App.Send(request, response, result);
        });

        return this.router;
    }
}