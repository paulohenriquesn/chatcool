import {UseCaseInterface} from "@application/interfaces/UseCaseInterface";
import {User} from "@domain/entities/User";

export type InputJoinRoomCase = {
    user: User.Entity
    id: string
}
export type OutputJoinRoomCase = Promise<void>
export class JoinRoomCase implements UseCaseInterface<InputJoinRoomCase, OutputJoinRoomCase> {
    async execute(input: InputJoinRoomCase): Promise<OutputJoinRoomCase> {
        return await this.getRoomsChatRepository.execute()
    }
}