import { Router, Request, Response } from "express";
import { App } from "../../utils/App";
import { CourseInstallmentService } from "../../services/CourseInstallmentService";

export class CourseInstallmentController {

    private router: Router = Router();
    private courseInstallmentService = new CourseInstallmentService();

    getRouter(): Router {
        this.router.post("/", async(request: Request, response: Response) => {
            let reqData= request.body ? request.body.data : {};
            const result = this.courseInstallmentService.search(reqData);
            App.Send(request, response, result);

        });
        this.router.put("/", async(request: Request, response: Response) => {
            let reqData= request.body ? request.body.data : null;
            let result = this.courseInstallmentService.save(reqData);
            App.Send(request, response, result);
        });

        this.router.get("/:id", async(request: Request,response:Response)=>{
            const id:any=request.params.id;
            const result = this.courseInstallmentService.entity(id);
            App.Send(request, response, result);
        });

        this.router.delete("/:id", async(request:Request,response:Response)=>{
            const id:any=request.params.id;
            const result = this.courseInstallmentService.delete(id);
            App.Send(request, response, result);
        });

        return this.router;
    }
}