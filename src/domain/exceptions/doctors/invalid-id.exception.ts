import { DomainException } from "../domain.exception";

export class InvalidIdException extends DomainException {
    constructor() {
        super("Id invalido.");
        Object.setPrototypeOf(this, InvalidIdException.prototype);
    }
}