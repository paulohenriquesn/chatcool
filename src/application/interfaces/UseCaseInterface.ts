export interface UseCaseInterface<I,O> {
    execute(i?: I) : Promise<O>
}