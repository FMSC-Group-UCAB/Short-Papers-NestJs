import { DomainException } from "../domain.exception";

export class InvalidLatitudeException extends DomainException {
    constructor() {
        super("Longitud de la ubicación invalida.");
        Object.setPrototypeOf(this, InvalidLatitudeException.prototype);
    }
}