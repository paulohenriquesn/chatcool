import {FindCursor, WithId} from "mongodb";
import {ChatRoom} from "@domain/entities/ChatRoom";

export class ChatRoomMapper {
    static async fromPersistenceArray(rooms:  FindCursor<WithId<ChatRoom.Domain>>):  Promise<ChatRoom.Entity[]> {
        const promise: Promise<ChatRoom.Entity[]> = new Promise(async (resolve, reject) => {
            const result: ChatRoom.Entity[] = []
            await rooms.forEach((room) => {
                result.push(ChatRoom.Entity.create({...room}, room._id.toHexString()))
            })
            resolve(result)
        })
        const result = await Promise.resolve(promise)

        if(result.length === 0) {
            return []
        }
        return result
    }
}