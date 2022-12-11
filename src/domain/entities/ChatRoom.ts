import { AbstractEntity } from "../abstractions/AbstractEntity";

export namespace ChatRoom {
    export type Domain = {
        name: string;
        limitOfUsers: number;
        isPrivate: boolean;
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
