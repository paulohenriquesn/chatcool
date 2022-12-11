import {ControllerInterface} from "@application/interfaces/ControllerInterface";
import {ChatRoom} from "@domain/entities/ChatRoom";

export type OutputGetRoomsController = Promise<ChatRoom.Entity[]>
export class GetRoomsController implements ControllerInterface<null, OutputGetRoomsController> {
    async handle(): Promise<OutputGetRoomsController> {
        return [];
    }
}