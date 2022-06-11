import { Doctor } from "src/domain/entities/doctor";
import { IRepository } from "src/domain/interfaces/repository.interface";
import { Observable } from "src/domain/observables/observable";
import { ISearchDoctorsByCriteriaDto } from "src/application/dtos/search-doctors-by-criteria.dto.interface";
import { ISearchDoctorsByCriteriaResponseDto } from "../dtos/search-doctors-by-criteria-response.dto.interface";

export class SearchDoctorsByCriteriaUseCase extends Observable {

    constructor(private readonly doctorsRepository: IRepository<Doctor>) { super(); }

    async searchDoctor(searchDoctorsByCriteria: ISearchDoctorsByCriteriaDto): Promise<ISearchDoctorsByCriteriaResponseDto> {
        const doctors: Doctor[] = await this.doctorsRepository.find({ Specialty: [searchDoctorsByCriteria.specialty] });
        return { doctors };
    }
}