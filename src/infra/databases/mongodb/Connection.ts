import {Db, MongoClient} from "mongodb";
import {Environment} from "@main/env/Environment";
import {Logger} from "../../../utils/Logger";
import {getMongoURLContainer} from "../../../../devops/containers/mongodb";

export class MongoConnection {
    static client: MongoClient

    static getInstance(): MongoClient {
        if(!this.client) {
            this.client = new MongoClient(getMongoURLContainer() || Environment.MONGODB_URL)
        }
        return this.client
    }

    static getDb(): Db {
        return this.getInstance().db()
    }

    static async connect(): Promise<void> {
        try {
            const mongoInstance = this.getInstance()
            await mongoInstance.connect()
            mongoInstance.db('coolchat')
            Logger.LogSuccess('Connected on mongodb database')
        }catch (error) {
            console.log(error)
            Logger.LogError(error)
        }
    }
}