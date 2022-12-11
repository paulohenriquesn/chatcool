import * as dotenv from 'dotenv'
dotenv.config()

import {Application} from "@infra/express/Application";
import {Environment} from "@main/env/Environment";
import {initContainers} from "../../devops";

const expressServer = new Application().getInstance()

initContainers().then(() => {
    console.log('Containers initialized!')
    expressServer.listen(Environment.EXPRESS_PORT, () => {
        console.log(`Express server initialized at port ${Environment.EXPRESS_PORT}`)
    })
})

