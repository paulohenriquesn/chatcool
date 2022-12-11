import {GetRoomsChatRepository} from "@application/repositories/ChatRooms/GetRoomsChatRepository";
import {ChatRoom} from "@domain/entities/ChatRoom";
import {vi} from "vitest";

export class FakeGetRoomsChatRepository implements GetRoomsChatRepository.Contract {
    async execute(): Promise<ChatRoom.Entity[]> {
        return Promise.resolve([]);
    }
}

export const fakeGetRoomsChatRepository = vi.spyOn(FakeGetRoomsChatRepository.prototype, 'execute')