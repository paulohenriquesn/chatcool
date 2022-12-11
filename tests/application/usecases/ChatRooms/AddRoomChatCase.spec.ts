import {describe, it, expect} from "vitest";
import {CreateRoomChatCase, InputCreateRoomChatCase} from "@application/usecases/ChatRooms/CreateRoomChatCase";
import {
    fakeAddRoomsChatRepository,
    FakeAddRoomsChatRepository
} from "@tests/fakes/repositories/FakeAddRoomChatRepository";

describe('AddRoomChatCase', () => {
    let usecase = new CreateRoomChatCase(new FakeAddRoomsChatRepository())
    let input: InputCreateRoomChatCase = {name: "fakeName", limitOfUsers: 2, users: [], password: 123}

    it('should call add room repository with correct input', async () => {
        await usecase.execute(input)
        expect(fakeAddRoomsChatRepository).toHaveBeenLastCalledWith({
            ...input
        })
    })
})