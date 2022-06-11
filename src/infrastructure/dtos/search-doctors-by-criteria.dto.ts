import { IsEnum, IsNotEmpty } from "class-validator";
import { SpecialtyType } from "src/domain/enums/specialty-type.enum";

export class SearchDoctorsByCriteriaDto {
    @IsNotEmpty()
    @IsEnum(SpecialtyType)
    specialty: SpecialtyType;
}