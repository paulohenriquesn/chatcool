import {Request, Response} from "express";
import {Logger} from "@utils/Logger";
import {ControllerInterface} from "@application/interfaces/ControllerInterface";

export const ControllerHandlerAdapter = (factoryMethod: () => ControllerInterface<any, any>) => {
    return async (request: Request, response: Response): Promise<Response> => {
        const input = {
            ...(request.body || {}),
            ...(request.query || {}),
            ...(request.params || {})
        }
        Logger.LogRequest(input)
        try {
            const controller = factoryMethod()
            const data = await controller.handle(input);
            return response.status(200).json(data)
        } catch (error) {
            Logger.LogError(error)
            return response.status(500).json(error)
        }
    }
}