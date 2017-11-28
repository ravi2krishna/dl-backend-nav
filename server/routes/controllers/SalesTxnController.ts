import { Router, Request, Response } from "express";
import { App } from "../../utils/App";
import { SalesTxnService } from "../../services/SalesTxnService";

export class SalesTxnController {

    private router: Router = Router();
    private salesTxnService = new SalesTxnService();

    getRouter(): Router {
        this.router.post("/", async(request: Request, response: Response) => {
            let reqData= request.body ? request.body.data : {};
            const result = this.salesTxnService.search(reqData);
            App.Send(request, response, result);

        });
        this.router.put("/", async(request: Request, response: Response) => {
            let reqData= request.body ? request.body.data : null;
            let result = this.salesTxnService.save(reqData);
            App.Send(request, response, result);
        });

        this.router.get("/:id", async(request: Request,response:Response)=>{
            const id:any=request.params.id;
            const result = this.salesTxnService.entity(id);
            App.Send(request, response, result);
        });

        this.router.delete("/:id", async(request:Request,response:Response)=>{
            const id:any=request.params.id;
            const result = this.salesTxnService.delete(id);
            App.Send(request, response, result);
        });

        return this.router;
    }
}