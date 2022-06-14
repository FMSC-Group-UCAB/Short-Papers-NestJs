import { QueryServiceDecorator } from "./query-service.decorator";

export class AuditingQueryServiceDecorator<T, E> extends QueryServiceDecorator<T, E>{
    async execute(dto: T): Promise<E> {
        const result: E = await super.execute(dto);
        console.log('Datos: ');
        console.log(dto);
        return result;
    }
}
