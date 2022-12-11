import {ChatRoom} from "@domain/entities/ChatRoom";

export namespace GetRoomsChatRepository {
    export type Output = ChatRoom.Entity[]
    export interface Contract {
        execute(): Promise<Output>
    }
}