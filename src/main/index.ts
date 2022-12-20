import * as dotenv from 'dotenv'

dotenv.config()

import {Application as ExpressApplication} from "@infra/express/Application";
import {Environment} from "@main/env/Environment";
import {initContainers} from "@devops/index";
import {MongoConnection} from "@infra/databases/mongodb/Connection";
import {Application as SocketApplication} from "@infra/socketio/Application";
import {buildEventsSocket} from "@main/events";
import * as http from "http";

const expressServer = new ExpressApplication().getInstance()

initContainers().then(async () => {
    console.log('Containers initialized!')

    await MongoConnection.connect()
    const httpServer = http.createServer(expressServer)
    const sockerServer = new SocketApplication(httpServer)

    httpServer.listen(Environment.EXPRESS_PORT, () => {
        console.log(`Express server initialized at port ${Environment.EXPRESS_PORT}`)
        buildEventsSocket(sockerServer)
    })
})

