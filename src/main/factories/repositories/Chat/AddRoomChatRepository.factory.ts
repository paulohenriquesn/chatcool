import {MongoConnection} from "@infra/databases/mongodb/Connection";
import {AddRoomsChatMongoRepository} from "@data/ChatRooms/AddRoomChatMongoRepository";

export class AddRoomsChatRepositoryFactory {
    static instance: AddRoomsChatMongoRepository

    static getInstance(): AddRoomsChatMongoRepository {
        if(!this.instance) {
            this.instance = new AddRoomsChatMongoRepository(MongoConnection.getDb())
        }
        return this.instance
    }
}