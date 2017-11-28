import { Router, Request, Response } from "express";
import { App } from "../../utils/App";
import { GuestFormService } from "../../services/GuestFormService";

export class GuestFormController {

    private router: Router = Router();
    private guestFormService = new GuestFormService();

    getRouter(): Router {
        this.router.post("/", async(request: Request, response: Response) => {
            let reqData= request.body ? request.body.data : {};
            const result = this.guestFormService.search(reqData);
            App.Send(request, response, result);

        });
        this.router.put("/", async(request: Request, response: Response) => {
            let reqData= request.body ? request.body.data : null;
            let result = this.guestFormService.save(reqData);
            App.Send(request, response, result);
        });

        this.router.get("/:id", async(request: Request,response:Response)=>{
            const id:any=request.params.id;
            const result = this.guestFormService.entity(id);
            App.Send(request, response, result);
        });

        this.router.delete("/:id", async(request:Request,response:Response)=>{
            const id:any=request.params.id;
            const result = this.guestFormService.delete(id);
            App.Send(request, response, result);
        });

        return this.router;
    }
}