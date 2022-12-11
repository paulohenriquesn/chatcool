import {GetRoomsChatCase} from "@application/usecases/ChatRooms/GetRoomsChatCase";
import {GetRoomsChatRepositoryFactory} from "@main/factories/repositories/Chat/GetRoomsChatRepository.factory";

export class GetRoomsUseCaseFactory {
    static instance: GetRoomsChatCase

    static getInstance() {
        if(!this.instance) {
            this.instance = new GetRoomsChatCase(GetRoomsChatRepositoryFactory.getInstance())
        }
        return this.instance
    }
}