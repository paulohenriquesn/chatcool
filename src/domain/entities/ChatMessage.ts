import { AbstractEntity } from "@application/abstractions/AbstractEntity";
import { User } from "@domain/entities/User";

export namespace ChatMessage {
    export type Domain = {
        sender: User.Entity;
        message: string;
        createdAt: Date;
    };

    export class Entity extends AbstractEntity<Domain> {
        private constructor(props: Domain, id?: string) {
            super(props, id);
        }
        static create(props: Domain, id?: string): Entity {
            return new Entity({ ...props }, id);
        }

        toJSON() {
            return { ...this.props };
        }
    }
}
