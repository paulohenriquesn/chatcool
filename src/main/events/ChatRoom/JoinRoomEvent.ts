import {EventInterface} from "@application/interfaces/EventInterface";

export type InputJoinRoomEvent = {
    id: string
}

export type OutputJoinRoomEvent = Promise<void>

export class JoinRoomEvent implements EventInterface<InputJoinRoomEvent, OutputJoinRoomEvent> {
    async handle(input: InputJoinRoomEvent): Promise<OutputJoinRoomEvent> {
      console.log(input)
    }
}