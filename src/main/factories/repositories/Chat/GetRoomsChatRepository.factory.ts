import {GetRoomsChatMongoRepository} from "@data/ChatRooms/GetRoomsChatMongoRepository";
import {MongoConnection} from "@infra/databases/mongodb/Connection";

export class GetRoomsChatRepositoryFactory {
    static instance: GetRoomsChatMongoRepository

    static getInstance(): GetRoomsChatMongoRepository {
        if(!this.instance) {
            this.instance = new GetRoomsChatMongoRepository(MongoConnection.getDb())
        }
        return this.instance
    }
}