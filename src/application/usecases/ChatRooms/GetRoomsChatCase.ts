import {UseCaseInterface} from "@application/interfaces/UseCaseInterface";
import {ChatRoom} from "@domain/entities/ChatRoom";
import {GetRoomsChatRepository} from "@application/repositories/ChatRooms/GetRoomsChatRepository";

export type OutputGetRoomsChatCase = Promise<ChatRoom.Entity[]>
export class GetRoomsChatCase implements UseCaseInterface<null, OutputGetRoomsChatCase> {
    constructor(
        private readonly getRoomsChatRepository: GetRoomsChatRepository.Contract
    ) {}

    async execute(i?: null): Promise<OutputGetRoomsChatCase> {
        return await this.getRoomsChatRepository.execute()
    }
}