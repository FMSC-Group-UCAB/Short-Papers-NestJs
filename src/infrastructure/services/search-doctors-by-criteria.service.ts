import { ISearchDoctorsByCriteriaResponseDto } from "src/application/dtos/search-doctors-by-criteria-response.dto.interface";
import { SearchDoctorsByCriteriaUseCase } from "src/application/usecases/search-doctors-by-criteria.usecase";
import { EntityManager } from "typeorm";
import { ISearchDoctorsByCriteriaDto } from "../../application/dtos/search-doctors-by-criteria.dto.interface";
import { DoctorEntity } from "../entities/doctor.entity";
import { DoctorRepository } from "../repositories/doctor.repository";
import { IService } from "./interface/service.interface";
import { Injectable } from '@nestjs/common';

@Injectable()
export class SearchDoctorsByCriteriaService implements IService<ISearchDoctorsByCriteriaDto, ISearchDoctorsByCriteriaResponseDto>{

    constructor(private readonly manager: EntityManager) { }

    async execute(dto: ISearchDoctorsByCriteriaDto): Promise<ISearchDoctorsByCriteriaResponseDto> {
        const doctorRepository = this.manager.getRepository(DoctorEntity);

        const usecase = new SearchDoctorsByCriteriaUseCase(new DoctorRepository(doctorRepository));
        return await usecase.searchDoctor(dto);
    }
}