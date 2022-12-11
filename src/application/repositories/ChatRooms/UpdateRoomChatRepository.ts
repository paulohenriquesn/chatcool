import {ChatRoom} from "@domain/entities/ChatRoom";

export namespace UpdateRoomChatRepository {
    export type Input = ChatRoom.Domain
    export type Output = ChatRoom.Entity
    export interface Contract {
        execute(input: Input): Promise<Output>
    }
}