import { Doctor } from "src/domain/entities/doctor";
import { DoctorEntity } from "../entities/doctor.entity";
import { DoctorLocation } from "src/domain/valueobjects/doctor/doctor-location";
import { DoctorId } from "src/domain/valueobjects/doctor/doctor-id";
import { DoctorFirstName } from "src/domain/valueobjects/doctor/doctor-first-name";
import { DoctorLastName } from "src/domain/valueobjects/doctor/doctor-last-name";
import { SpecialtyType } from "src/domain/enums/specialty-type.enum";
import { HoldType } from "src/domain/enums/hold-type.enum";
import { SpecialtyEntity } from "../entities/specialty.entity";

export class DoctorToEntityMapper {

    public static map(doctor: Doctor): DoctorEntity{
        const specialties : SpecialtyType[] = [];
        doctor.Specialty.forEach(specialty => {
            specialties.push(specialty);
        }
        );
        
        const aux : SpecialtyEntity[] = [];

        specialties.forEach(specialty => {
            aux.push({
                id: null,
                specialty: specialty,
                createdAt: null,
                updatedAt: null
            });
        }
        );

        return {id : doctor.Id.value,
            firstName : doctor.FirstName.value,
            lastName : doctor.LastName.value,
            sex: doctor.Sex,
            specialties : aux,
            latitude : doctor.Location.ValueLatitude,
            longitude : doctor.Location.ValueLongitude,
            holdType : doctor.HoldType,
            createdAt: null,
            updatedAt: null

            };
    }

}