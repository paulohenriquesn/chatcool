import {ChatRoom} from "@domain/entities/ChatRoom";

export namespace AddRoomChatRepository {
    export type Input = ChatRoom.Domain
    export interface Contract {
        execute(input: Input): void
    }
}