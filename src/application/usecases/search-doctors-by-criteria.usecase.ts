import { Doctor } from "../../domain/entities/doctor";
import { IRepository } from "../../domain/interfaces/repository.interface";
import { Observable } from "../../domain/observables/observable";
import { ISearchDoctorsByCriteriaDto } from "../../application/dtos/search-doctors-by-criteria.dto.interface";
import { ISearchDoctorsByCriteriaResponseDto } from "../dtos/search-doctors-by-criteria-response.dto.interface";

export class SearchDoctorsByCriteriaUseCase extends Observable {

    constructor(private readonly doctorsRepository: IRepository<Doctor>) { super(); }

    async searchDoctor(searchDoctorsByCriteria: ISearchDoctorsByCriteriaDto): Promise<ISearchDoctorsByCriteriaResponseDto> {
        const doctors: Doctor[] = await this.doctorsRepository.find({ Specialty: [searchDoctorsByCriteria.specialty] }, { pageIndex: searchDoctorsByCriteria.pageIndex, pageSize: searchDoctorsByCriteria.pageSize });
        return { doctors };
    }
}