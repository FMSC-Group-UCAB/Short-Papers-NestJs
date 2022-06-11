import { SpecialtyType } from "src/domain/enums/specialty-type.enum";

export interface ISearchDoctorsByCriteriaDto {
    specialty: SpecialtyType;
    pageIndex: number;
    pageSize: number;
}