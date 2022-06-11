import { DomainException } from "../domain.exception";

export class InvalidLocationException extends DomainException {
    constructor() {
        super("Ubicación invalida.");
        Object.setPrototypeOf(this, InvalidLocationException.prototype);
    }
}