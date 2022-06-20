import { Doctor } from "../../domain/entities/doctor";

export interface ISearchDoctorsByCriteriaResponseDto {
    doctors: Doctor[];
}