import { DomainException } from "../domain.exception";

export class InvalidSpecialtyException extends DomainException {
    constructor() {
        super("Especialidad invalida.");
        Object.setPrototypeOf(this, InvalidSpecialtyException.prototype);
    }
}