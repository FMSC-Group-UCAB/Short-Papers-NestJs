import { DomainException } from "../domain.exception";

export class InvalidFirstNameException extends DomainException {
    constructor() {
        super("Nombre invalido");
        Object.setPrototypeOf(this, InvalidFirstNameException.prototype);
    }
}