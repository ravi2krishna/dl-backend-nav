import { Router, Request, Response } from "express";
import { App } from "../../utils/App";
import { AttendanceService } from "../../services/AttendanceService";

export class AttendanceController {

    private router: Router = Router();
    private attendanceService = new AttendanceService();

    getRouter(): Router {
        this.router.post("/", async(request: Request, response: Response) => {
            let reqData= request.body ? request.body.data : {};
            const result = this.attendanceService.search(reqData);
            App.Send(request, response, result);

        });
        this.router.put("/", async(request: Request, response: Response) => {
            let reqData= request.body ? request.body.data : null;
            let result = this.attendanceService.save(reqData);
            App.Send(request, response, result);
        });

        this.router.get("/:id", async(request: Request,response:Response)=>{
            const id:any=request.params.id;
            const result = this.attendanceService.entity(id);
            App.Send(request, response, result);
        });

        this.router.delete("/:id", async(request:Request,response:Response)=>{
            const id:any=request.params.id;
            const result = this.attendanceService.delete(id);
            App.Send(request, response, result);
        });

        return this.router;
    }
}