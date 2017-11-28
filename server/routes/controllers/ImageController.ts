import { Router, Request, Response } from "express";
import { App } from "../../utils/App";
import { ImageService } from "../../services/ImageService";

export class ImageController {

    private router: Router = Router();
    private imageService = new ImageService();

    getRouter(): Router {
        this.router.post("/", async (request: Request, response: Response) => {
            let reqData = request.body ? request.body.data : {};
            const result = this.imageService.search(reqData);
            App.Send(request, response, result);

        });

        this.router.get("/:id", async (request: Request, response: Response) => {
            const id: any = request.params.id;
            const result = this.imageService.entity(id);
            App.Send(request, response, result);
        });

        return this.router;
    }
}
