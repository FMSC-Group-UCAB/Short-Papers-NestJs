import { BadRequestException } from "@nestjs/common";
import { ServiceDecorator } from "./service.decorator";

export class ErrorHandlingServiceDecorator<T, E> extends ServiceDecorator<T, E>{
    async execute(dto: T): Promise<E> {
        try {
            return super.execute(dto);
        }
        catch (error) {
            throw new BadRequestException(error['message']);
        }
    }
}
