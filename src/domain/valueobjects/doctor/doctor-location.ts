import { InvalidLatitudeException } from '../../../domain/exceptions/doctors/invalid-latitude.exception';
import { InvalidLongitudeException } from '../../../domain/exceptions/doctors/invalid-longitude.exception';
import { IValueObject } from '../../interfaces/value-object.interface';

export class DoctorLocation implements IValueObject<DoctorLocation> {


    private constructor(private readonly latitude: string, private readonly longitude: string) { }

    get ValueLatitude() { return this.latitude; }
    get ValueLongitude() { return this.longitude; }

    equals(other: DoctorLocation): boolean {
        return this.latitude == other.latitude && this.longitude == this.longitude;
    }

    /**
     * @param latitude latitud del doctor
     * @param longitude longitud del doctor
     * @returns */
    public static create(latitude: string, longitude: string): DoctorLocation {
        if (latitude == null || latitude == undefined) {
            throw new InvalidLatitudeException();
        }
        if (longitude == null || longitude == undefined) {
            throw new InvalidLongitudeException();
        }
        return new DoctorLocation(latitude, longitude);
    }
}