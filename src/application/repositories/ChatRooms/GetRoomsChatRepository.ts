import {ChatRoom} from "@domain/entities/ChatRoom";
import {FindCursor} from "mongodb";

export namespace GetRoomsChatRepository {
    export type Output = ChatRoom.Entity[]
    export interface Contract {
        execute(): Promise<ChatRoom.Entity[]>
    }
}