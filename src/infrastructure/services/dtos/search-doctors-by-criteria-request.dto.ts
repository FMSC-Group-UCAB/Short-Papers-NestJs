import { SpecialtyType } from "src/domain/enums/specialty-type.enum";

export interface ISearchDoctorsByCriteriaRequestDto {
    specialty: SpecialtyType;
    pageIndex: number;
    pageSize: number;
}