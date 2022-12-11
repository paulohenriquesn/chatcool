export interface UseCaseInterface<I,O> {
    handle(i?: I) : Promise<O>
}