import {getMongoURLContainer} from "../../../devops/containers/mongodb";

export const Environment = {
    EXPRESS_PORT: process.env.EXPRESS_PORT || 3000,
    MONGODB_URL: process.env.MONGODB_URL || ''
}