import { HoldType } from "src/domain/enums/hold-type.enum";
import { Sex } from "src/domain/enums/sex.enum";
import { SpecialtyType } from "src/domain/enums/specialty-type.enum";

export class DoctorDto {
    id: number;
    firstName: string;
    lastName: string;
    sex: Sex;
    holdType: HoldType;
    specialties: SpecialtyType[];
    latitude: string;
    longitude: string;
    image: string;
}