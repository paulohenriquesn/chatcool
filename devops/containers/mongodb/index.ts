import {GenericContainer, StartedTestContainer} from "testcontainers";

let mongoContainer: StartedTestContainer

export const buildMongoDBContainer = async () => {
    mongoContainer = await new GenericContainer("mongo").withExposedPorts(27017).start()
}

export const getMongoURLContainer = () => `mongodb://${mongoContainer.getHost()}:${mongoContainer.getMappedPort(27017)}/coolchat`