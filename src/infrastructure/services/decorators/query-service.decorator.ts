import { IQueryService } from "src/infrastructure/services/interface/query-service.interface";

export abstract class QueryServiceDecorator<T, E> implements IQueryService<T, E>{
    private readonly service: IQueryService<T, E>;

    constructor(service: IQueryService<T, E>) {
        this.service = service;
    }

    async execute(dto: T): Promise<E> {
        return this.service.execute(dto);
    }
}