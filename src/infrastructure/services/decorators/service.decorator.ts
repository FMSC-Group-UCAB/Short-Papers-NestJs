import { IService } from "src/infrastructure/services/interface/service.interface";

export abstract class ServiceDecorator<T, E> implements IService<T, E>{
    private readonly service: IService<T, E>;

    constructor(service: IService<T, E>) {
        this.service = service;
    }

    async execute(dto: T): Promise<E> {
        return this.service.execute(dto);
    }
}