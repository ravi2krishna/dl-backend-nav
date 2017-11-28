import { Router, Request, Response } from "express";
import { App } from "../../utils/App";
import { CourseDetailsService } from "../../services/CourseDetailsService";

export class CourseDetailsController {

    private router: Router = Router();
    private courseDetailsService = new CourseDetailsService();

    getRouter(): Router {
        this.router.post("/", async(request: Request, response: Response) => {
            let reqData= request.body ? request.body.data : {};
            const result = this.courseDetailsService.search(reqData);
            App.Send(request, response, result);

        });
        this.router.put("/", async(request: Request, response: Response) => {
            let reqData= request.body ? request.body.data : null;
            let result = this.courseDetailsService.save(reqData);
            App.Send(request, response, result);
        });

        this.router.get("/:id", async(request: Request,response:Response)=>{
            const id:any=request.params.id;
            const result = this.courseDetailsService.entity(id);
            App.Send(request, response, result);
        });

        this.router.delete("/:id", async(request:Request,response:Response)=>{
            const id:any=request.params.id;
            const result = this.courseDetailsService.delete(id);
            App.Send(request, response, result);
        });

        return this.router;
    }
}