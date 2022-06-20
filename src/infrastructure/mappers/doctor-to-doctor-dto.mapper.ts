import { Doctor } from "../../domain/entities/doctor";
import { DoctorDto } from "../dtos/doctor.dto";

export class DoctorToDoctorDto {

    public static map(doctor: Doctor): DoctorDto {
        return {
            id: doctor.Id.value,
            firstName: doctor.FirstName.value,
            lastName: doctor.LastName.value,
            sex: doctor.Sex,
            specialties: doctor.Specialty,
            latitude: doctor.Location.ValueLatitude,
            longitude: doctor.Location.ValueLongitude,
            holdType: doctor.HoldType,
            image: doctor.Image.value
        };
    }
}