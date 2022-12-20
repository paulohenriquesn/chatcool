import {GetRoomsChatRepository} from "@application/repositories/ChatRooms/GetRoomsChatRepository";
import {Collection, Db} from "mongodb";
import {ChatRoom} from "@domain/entities/ChatRoom";
import {ChatRoomMapper} from "@main/mappers/ChatRoomMapper";

export class GetRoomsChatMongoRepository implements GetRoomsChatRepository.Contract {
    private readonly collection: Collection<ChatRoom.Domain>
    constructor(private readonly mongo: Db) {
        this.collection = mongo.collection('rooms')
    }
    async execute(): Promise<ChatRoom.Entity[]> {
        const result = await this.collection.find({});
        return await ChatRoomMapper.fromPersistenceArray(result)
    }
}