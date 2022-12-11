import {ChatMessage} from "@domain/entities/ChatMessage";

export namespace AddMessageOnRepository {
    export type Input = ChatMessage.Entity
    export interface Contract {
        execute(input: Input): void
    }
}