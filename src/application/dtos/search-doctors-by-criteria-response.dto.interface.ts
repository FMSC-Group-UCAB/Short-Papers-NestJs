import { Doctor } from "src/domain/entities/doctor";

export interface ISearchDoctorsByCriteriaResponseDto {
    doctors: Doctor[];
}