import { DomainException } from "../domain.exception";

export class InvalidLongitudeException extends DomainException {
    constructor() {
        super("Longitud de la ubicación invalida.");
        Object.setPrototypeOf(this, InvalidLongitudeException.prototype);
    }
}