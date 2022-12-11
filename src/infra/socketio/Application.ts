import { Server } from 'socket.io'
import * as http from "http";

export class Application {
    private readonly io: Server
    constructor(httpServer: http.Server) {
        this.io = new Server(
            httpServer,
            {
                cors: {
                    origin: '*',
                    methods: ["GET", "POST"]
                }
            }
        )
    }

    async getServer() {
        return this.io
    }
}