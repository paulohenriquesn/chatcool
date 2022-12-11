import {EventInterface} from "@application/interfaces/EventInterface";
import {Logger} from "@utils/Logger";

export class EventHandlerAdapter {
    async execute(factoryMethod: EventInterface<any, any>, data: unknown) {
        await factoryMethod.handle(data)
    }
}