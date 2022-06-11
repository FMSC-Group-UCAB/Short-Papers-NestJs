import { DoctorId } from "../valueobjects/doctor/doctor-id";
import { DoctorFirstName } from "../valueobjects/doctor/doctor-first-name";
import { DoctorLastName } from "../valueobjects/doctor/doctor-last-name";
import { DoctorLocation } from "../valueobjects/doctor/doctor-location";
import { SpecialtyType } from "../enums/specialty-type.enum";
import { HoldType } from "../enums/hold-type.enum";
import { Sex } from "../enums/sex.enum";
import { InvalidIdException } from "../exceptions/doctors/invalid-id.exception";
import { InvalidFirstNameException } from "../exceptions/doctors/invalid-first-name.exception";
import { InvalidLastNameException } from "../exceptions/doctors/invalid-last-name.exception";
import { InvalidSpecialtyException } from "../exceptions/doctors/invalid-specialty.exception";
import { InvalidLocationException } from "../exceptions/doctors/invalid-location.exception";
import { InvalidHoldException } from "../exceptions/doctors/invalid-hold.exception";

export class Doctor {
    private constructor(
        private readonly id: DoctorId,
        private firstName: DoctorFirstName,
        private lastName: DoctorLastName,
        private specialty: SpecialtyType[],
        private location: DoctorLocation,
        private holdType: HoldType,
        private sex: Sex
    ) {
        this.validate();
    }

    //Getters
    get Id() { return this.id; }
    get FirstName() { return this.firstName; }
    get LastName() { return this.lastName; }
    get Specialty() { return this.specialty; }
    get Location() { return this.location; }
    get HoldType() { return this.holdType; }
    get Sex() { return this.sex; }

    /**
     * Patron Factory
     * @param id identificador del doctor
     * @param firstName primer nombre del doctor
     * @param lastName apellido del doctor
     * @param specialty especialidad del doctor
     * @param location ubicacion del doctor
     * @param holdType retencion que el doctor pueda tener en el sistema
     * @returns `Doctor` */
    public static create(id: DoctorId, firstName: DoctorFirstName, lastName: DoctorLastName, specialty: SpecialtyType[], location: DoctorLocation, holdType: HoldType, sex: Sex): Doctor {
        return new Doctor(id, firstName, lastName, specialty, location, holdType, sex);
    }

    /**
     * Permite actualizar los datos del doctor.
     * @param firstName primer nombre del doctor.
     * @param lastName apellido del doctor.
     * @param specialty especialidad del doctor.
     * @param location ubicacion del doctor.
     * @param holdType retencion que el doctor pueda tener en el sistema. */
    public update(firstName: DoctorFirstName, lastName: DoctorLastName, specialty: SpecialtyType[], location: DoctorLocation, holdType: HoldType, sex: Sex) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.specialty = specialty;
        this.location = location;
        this.holdType = holdType;
        this.sex = sex;
        this.validate();
    }

    /** Valida los atributos de la entidad.*/
    private validate(): void {
        if (this.id == null || this.id == undefined) {
            throw new InvalidIdException();
        }
        if (this.firstName == null || this.firstName == undefined) {
            throw new InvalidFirstNameException();
        }
        if (this.lastName == null || this.lastName == undefined) {
            throw new InvalidLastNameException();
        }
        if (this.specialty == null || this.specialty == undefined) {
            throw new InvalidSpecialtyException();
        }
        if (this.location == null || this.location == undefined) {
            throw new InvalidLocationException();
        }
        if (this.holdType == null || this.holdType == undefined) {
            throw new InvalidHoldException();
        }
    }
}