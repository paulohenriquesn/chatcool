import { Router } from 'express'
import {ControllerHandlerAdapter} from "@infra/express/ControllerHandlerAdapter";
import {GetRoomsController} from "@main/routes/Chat/controllers/GetRoomsController";

const ChatRouter = Router();

ChatRouter.get('/rooms', ControllerHandlerAdapter(() => new GetRoomsController()))

export { ChatRouter }