import { BadRequestException } from "@nestjs/common";
import { QueryServiceDecorator } from "./query-service.decorator";

export class ErrorHandlerQueryServiceDecorator<T, E> extends QueryServiceDecorator<T, E>{
    async execute(dto: T): Promise<E> {
        try {
            return super.execute(dto);
        }
        catch (error) {
            throw new BadRequestException(error['message']);
        }
    }
}
