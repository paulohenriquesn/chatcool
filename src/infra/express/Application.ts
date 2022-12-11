import express, {Express} from "express";
import {ChatRouter} from "@main/routes/Chat";

export class Application {
    private readonly app: Express;

    constructor() {
        this.app = express()
        this.middlewares()
        this.routes()
    }
    middlewares() {
        this.app.use(express.json())
    }
    routes() {
        this.app.use('/chat',ChatRouter)
    }

    getInstance() {
        return this.app
    }

}