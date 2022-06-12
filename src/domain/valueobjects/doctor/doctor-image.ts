import { IValueObject } from '../../interfaces/value-object.interface';

export class DoctorImage implements IValueObject<DoctorImage> {
    private constructor(private readonly path: string) { }

    get value() { return this.path; }

    equals(other: DoctorImage): boolean {
        return this.path == other.path;
    }

    /**
     * Patron Factory
     * @param path Path de la imagen del doctor
     * @returns `DoctorImage` */
    public static create(path: string): DoctorImage {
        if (path == null || path == undefined) {
            throw new Error('La imagen del doctor no puede ser null/undefined.');
        }
        return new DoctorImage(path);
    }
}