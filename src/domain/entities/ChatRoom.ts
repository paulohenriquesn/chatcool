import { AbstractEntity } from "@application/abstractions/AbstractEntity";
import { User } from "@domain/entities/User";

export namespace ChatRoom {
    export type Domain = {
        name: string;
        users: User.Entity[];
        limitOfUsers: number;
        password?: number;
    };

    export class Entity extends AbstractEntity<Domain> {
        private constructor(props: Domain, id?: string) {
            super(props, id);
        }
        static create(props: Domain, id?: string): Entity {
            return new Entity({ ...props }, id);
        }

        update(props: Domain) {
            return new Entity({ ...this.props, ...props }, this.id);
        }

        toJSON() {
            return { ...this.props };
        }
    }
}
