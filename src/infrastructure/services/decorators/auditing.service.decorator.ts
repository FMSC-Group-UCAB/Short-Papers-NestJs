import { ServiceDecorator } from "./service.decorator";

export class AuditingServiceDecorator<T, E> extends ServiceDecorator<T, E>{
    async execute(dto: T): Promise<E> {
        console.log("Servicio auditado.")
        return super.execute(dto);
    }
}
