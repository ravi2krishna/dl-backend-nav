import { Router, Request, Response } from "express";
import { App } from "../../utils/App";
import { MasterDataService } from "../../services/MasterDataService";

export class MasterDataController {

    private router: Router = Router();
    private masterDataService = new MasterDataService();

    getRouter(): Router {
        this.router.post("/", async(request: Request, response: Response) => {
            let reqData= request.body ? request.body.data : {};
            const result = this.masterDataService.search(reqData);
            App.Send(request, response, result);

        });
        this.router.put("/", async(request: Request, response: Response) => {
            let reqData= request.body ? request.body.data : null;
            let result = this.masterDataService.save(reqData);
            App.Send(request, response, result);
        });

        this.router.get("/:id", async(request: Request,response:Response)=>{
            const id:any=request.params.id;
            const result = this.masterDataService.entity(id);
            App.Send(request, response, result);
        });

        this.router.delete("/:id", async(request:Request,response:Response)=>{
            const id:any=request.params.id;
            const result = this.masterDataService.delete(id);
            App.Send(request, response, result);
        });

        return this.router;
    }
}