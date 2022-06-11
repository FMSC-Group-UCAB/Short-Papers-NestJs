import { Doctor } from "src/domain/entities/doctor";
import { DoctorEntity } from "../entities/doctor.entity";
import { DoctorLocation } from "src/domain/valueobjects/doctor/doctor-location";
import { DoctorId } from "src/domain/valueobjects/doctor/doctor-id";
import { DoctorFirstName } from "src/domain/valueobjects/doctor/doctor-first-name";
import { DoctorLastName } from "src/domain/valueobjects/doctor/doctor-last-name";
import { SpecialtyType } from "src/domain/enums/specialty-type.enum";



export class DoctorToDomainMapper {
    

    /**
     * 
     * @param doctorEntity entidad de persistencia del doctor
     * @returns doctor entidad de dominio del doctor
     */
    public static map(doctorEntity: DoctorEntity): Doctor {
        
        const specialties : SpecialtyType[] = [];
        doctorEntity.specialties.forEach(specialty => {
            specialties.push(specialty.specialty);
        }
        );

        return(
        Doctor.create(
            DoctorId.create(doctorEntity.id),
            DoctorFirstName.create(doctorEntity.firstName),
            DoctorLastName.create(doctorEntity.lastName),
            specialties,
            DoctorLocation.create(doctorEntity.latitude, doctorEntity.longitude),
            doctorEntity.holdType,
            doctorEntity.sex
        ));
    }
            

}