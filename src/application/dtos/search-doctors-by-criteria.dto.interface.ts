import { SpecialtyType } from "../../domain/enums/specialty-type.enum";

export interface ISearchDoctorsByCriteriaDto {
    specialty: SpecialtyType;
    pageIndex: number;
    pageSize: number;
}