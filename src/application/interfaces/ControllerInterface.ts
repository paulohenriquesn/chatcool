export interface ControllerInterface<I,O> {
    handle(i?: I) : Promise<O>
}