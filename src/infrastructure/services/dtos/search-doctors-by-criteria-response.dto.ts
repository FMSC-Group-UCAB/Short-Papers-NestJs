import { DoctorDto } from "../../../infrastructure/dtos/doctor.dto";

export interface ISearchDoctorsByCriteriaResponseDto {
    doctors: DoctorDto[];
}