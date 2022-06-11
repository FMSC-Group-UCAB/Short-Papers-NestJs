import { DomainException } from "../domain.exception";

export class InvalidLastNameException extends DomainException {
    constructor() {
        super("Apellido invalido.");
        Object.setPrototypeOf(this, InvalidLastNameException.prototype);
    }
}