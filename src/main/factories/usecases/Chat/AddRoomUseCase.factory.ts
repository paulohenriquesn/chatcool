import {CreateRoomChatCase} from "@application/usecases/ChatRooms/CreateRoomChatCase";
import {AddRoomsChatRepositoryFactory} from "@main/factories/repositories/Chat/AddRoomChatRepository.factory";

export class AddRoomUseCaseFactory {
    static instance: CreateRoomChatCase

    static getInstance() {
        if(!this.instance) {
            this.instance = new CreateRoomChatCase(AddRoomsChatRepositoryFactory.getInstance())
        }
        return this.instance
    }
}