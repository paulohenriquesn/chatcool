import {buildMongoDBContainer} from "./containers/mongodb";

export const initContainers = async () => {
    await buildMongoDBContainer()
}