import { Router } from 'express'
import {ControllerHandlerAdapter} from "@infra/express/ControllerHandlerAdapter";
import {GetRoomsController} from "@presentation/controllers/GetRoomsController";
import {AddRoomController} from "@presentation/controllers/AddRoomController";

const ChatRouter = Router();

ChatRouter.get('/rooms', ControllerHandlerAdapter(() => new GetRoomsController()))
ChatRouter.post('/rooms', ControllerHandlerAdapter(() => new AddRoomController()))

export { ChatRouter }