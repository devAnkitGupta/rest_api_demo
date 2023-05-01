import { Express, Request, Response } from "express";
import { createUserHandler } from "./controller/user.controllers";

function routes(app: Express) {
    app.get("/healthcheck", (req: Request, res: Response) => res.sendStatus(200),);
    app.post('/api/users-V2', createUserHandler)
}

export default routes