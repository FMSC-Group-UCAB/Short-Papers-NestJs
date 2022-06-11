import { DomainException } from "../domain.exception";

export class InvalidHoldException extends DomainException {
    constructor() {
        super("Hold invalido.");
        Object.setPrototypeOf(this, InvalidHoldException.prototype);
    }
}