import {ChatRoom} from "@domain/entities/ChatRoom";

export namespace AddRoomChatRepository {
    export type Input = ChatRoom.Domain
    export type Output = void;
    export interface Contract {
        execute(input: Input): Output
    }
}