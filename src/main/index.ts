import * as dotenv from 'dotenv'
dotenv.config()

import {Application} from "@infra/express/Application";
import {Environment} from "@main/env/Environment";
import {initContainers} from "@devops/index";
import {MongoConnection} from "@infra/databases/mongodb/Connection";

const expressServer = new Application().getInstance()

initContainers().then(async () => {
    console.log('Containers initialized!')
    await MongoConnection.connect()
    expressServer.listen(Environment.EXPRESS_PORT, () => {
        console.log(`Express server initialized at port ${Environment.EXPRESS_PORT}`)
    })
})

