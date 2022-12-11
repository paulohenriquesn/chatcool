import * as dotenv from 'dotenv'
dotenv.config()

import {Application} from "@infra/express/Application";
import {Environment} from "@main/env/Environment";

const expressServer = new Application().getInstance()

expressServer.listen(Environment.EXPRESS_PORT, () => {
    console.log(`Express server initialized at port ${Environment.EXPRESS_PORT}`)
})