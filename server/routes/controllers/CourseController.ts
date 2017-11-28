import { Router, Request, Response } from "express";
import { App } from "../../utils/App";
import { CourseService } from "../../services/CourseService";

export class CourseController {

    private router: Router = Router();
    private courseService = new CourseService();

    getRouter(): Router {
        this.router.post("/", async (request: Request, response: Response) => {
            let reqData = request.body ? request.body.data : {};
            const result = this.courseService.search(reqData);
            App.Send(request, response, result);

        });

        this.router.post("/user", async (request: Request, response: Response) => {
            let reqData = request.body ? request.body.data : {};
            const result = this.courseService.user(reqData);
            App.Send(request, response, result);

        });

         this.router.post("/batch", async (request: Request, response: Response) => {
            let reqData = request.body ? request.body.data : {};
            const result = this.courseService.batch(reqData);
            App.Send(request, response, result);

        });

        this.router.put("/", async (request: Request, response: Response) => {
            let reqData = request.body ? request.body.data : null;
            let result = this.courseService.save(reqData);
            App.Send(request, response, result);
        });

        this.router.get("/:id", async (request: Request, response: Response) => {
            const id: any = request.params.id;
            const result = this.courseService.entity(id);
            App.Send(request, response, result);
        });

        this.router.delete("/:id", async (request: Request, response: Response) => {
            const id: any = request.params.id;
            const result = this.courseService.delete(id);
            App.Send(request, response, result);
        });
//
        return this.router;
    }
}
