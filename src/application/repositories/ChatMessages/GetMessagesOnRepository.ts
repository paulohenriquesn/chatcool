import {ChatMessage} from "@domain/entities/ChatMessage";

export namespace GetMessagesOnRepository {
    export type Output = ChatMessage.Entity[]
    export interface Contract {
        execute(): Promise<Output>
    }
}