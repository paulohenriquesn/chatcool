import {Request, Response} from "express";
import {Logger} from "../../utils/Logger";
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
            return response.status(200).json(await controller.handle(input))
        } catch (error) {
            Logger.LogError(error)
            return response.status(500).json(error)
        }
    }
}