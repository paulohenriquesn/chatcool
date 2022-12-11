import {describe, it, expect} from "vitest";
import {GetRoomsChatCase} from "@application/usecases/ChatRooms/GetRoomsChatCase";
import {
    fakeGetRoomsChatRepository,
    FakeGetRoomsChatRepository
} from "@tests/fakes/repositories/FakeGetRoomsChatRepository";

describe('GetRoomsChatCase', () => {
    let usecase = new GetRoomsChatCase(new FakeGetRoomsChatRepository())

    it('should call get rooms repository', async () => {
        await usecase.execute()
        expect(fakeGetRoomsChatRepository).toHaveBeenCalledOnce()
    })
})