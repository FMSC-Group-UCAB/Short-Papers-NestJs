export interface IService<T, E> {
    execute(dto: T): Promise<E>;
}