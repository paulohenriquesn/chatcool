import {AddRoomChatRepository} from "@application/repositories/ChatRooms/AddRoomChatRepository";
import {vi} from "vitest";

export class FakeAddRoomsChatRepository implements AddRoomChatRepository.Contract {
    async execute(_input: AddRoomChatRepository.Input): Promise<AddRoomChatRepository.Output> {
        return Promise.resolve();
    }
}

export const fakeAddRoomsChatRepository = vi.spyOn(FakeAddRoomsChatRepository.prototype, 'execute')