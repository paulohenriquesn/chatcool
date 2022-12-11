import {UseCaseInterface} from "@application/interfaces/UseCaseInterface";
import {ChatRoom} from "@domain/entities/ChatRoom";
import {AddRoomChatRepository} from "@application/repositories/ChatRooms/AddRoomChatRepository";

export type InputCreateRoomChatCase = ChatRoom.Domain

export type OutputCreateRoomChatCase = Promise<void>
export class CreateRoomChatCase implements UseCaseInterface<InputCreateRoomChatCase, OutputCreateRoomChatCase> {
    constructor(
        private readonly createRoomChatRepository: AddRoomChatRepository.Contract
    ) {}

    async execute(input: InputCreateRoomChatCase): Promise<OutputCreateRoomChatCase> {
        await this.createRoomChatRepository.execute(input)
    }
}