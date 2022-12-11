import {Collection, Db} from "mongodb";
import {ChatRoom} from "@domain/entities/ChatRoom";
import {AddRoomChatRepository} from "@application/repositories/ChatRooms/AddRoomChatRepository";

export class AddRoomsChatMongoRepository implements AddRoomChatRepository.Contract {
    private readonly collection: Collection<ChatRoom.Domain>
    constructor(private readonly mongo: Db) {
        this.collection = mongo.collection('rooms')
    }
    async execute(input: AddRoomChatRepository.Input): Promise<void> {
        await this.collection.insertOne({
            ...input
        })
    }
}