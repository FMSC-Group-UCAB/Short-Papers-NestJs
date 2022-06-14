import { DoctorDto } from "src/infrastructure/dtos/doctor.dto";

export interface ISearchDoctorsByCriteriaResponseDto {
    doctors: DoctorDto[];
}