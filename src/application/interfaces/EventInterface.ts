export interface EventInterface<I,O> {
    handle(i?: I) : Promise<O>
}