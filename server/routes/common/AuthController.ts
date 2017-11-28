import { Router, Request, Response } from "express";
import { App } from "../../utils/App";
import { AuthService } from "../../services/common/AuthService";

export class AuthController {

    private router: Router = Router();

    getRouter(): Router {
        this.router.post("/",async(request: Request, response: Response) => {
            let reqData = request.body;
            const authService = new AuthService();
            const result = authService.retrieve(reqData.data);
            App.Send(request, response, result);
        });
        this.router.put("/",async(request: Request, response: Response) => {
            let reqData = request.body;
            const authService = new AuthService();
            const result = authService.signup(reqData.data);
            App.Send(request, response, result);
        });
        return this.router;
    }
}