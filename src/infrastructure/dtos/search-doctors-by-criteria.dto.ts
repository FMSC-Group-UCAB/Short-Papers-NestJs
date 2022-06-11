import { IsEnum, IsOptional } from "class-validator";
import { SpecialtyType } from "src/domain/enums/specialty-type.enum";

export class SearchDoctorsByCriteriaDto {
    @IsOptional()
    @IsEnum(SpecialtyType)
    specialty: SpecialtyType;
}