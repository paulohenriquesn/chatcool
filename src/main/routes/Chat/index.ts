import { Router } from 'express'
import {ControllerHandlerAdapter} from "@infra/express/ControllerHandlerAdapter";
import {GetRoomsController} from "@main/routes/Chat/controllers/GetRoomsController";
import {AddRoomController} from "@main/routes/Chat/controllers/AddRoomController";

const ChatRouter = Router();

ChatRouter.get('/rooms', ControllerHandlerAdapter(() => new GetRoomsController()))
ChatRouter.post('/rooms', ControllerHandlerAdapter(() => new AddRoomController()))

export { ChatRouter }