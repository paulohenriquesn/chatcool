import {ControllerInterface} from "@application/interfaces/ControllerInterface";
import {ChatRoom} from "@domain/entities/ChatRoom";
import {AddRoomUseCaseFactory} from "@main/factories/usecases/Chat/AddRoomUseCase.factory";

export type InputAddRoomController = ChatRoom.Domain
export class AddRoomController implements ControllerInterface<InputAddRoomController, void> {
    async handle(input: InputAddRoomController): Promise<void> {
        await AddRoomUseCaseFactory.getInstance().execute(input);
    }
}