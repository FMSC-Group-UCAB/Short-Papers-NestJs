import { SearchDoctorsByCriteriaUseCase } from "src/application/usecases/search-doctors-by-criteria.usecase";
import { EntityManager } from "typeorm";
import { ISearchDoctorsByCriteriaDto } from "../../application/dtos/search-doctors-by-criteria.dto.interface";
import { DoctorEntity } from "../entities/doctor.entity";
import { DoctorRepository } from "../repositories/doctor.repository";
import { IService } from "./interface/service.interface";
import { Injectable } from '@nestjs/common';
import { Doctor } from "src/domain/entities/doctor";

@Injectable()
export class SearchDoctorsByCriteriaService implements IService<ISearchDoctorsByCriteriaDto, Doctor[]>{

    constructor(private readonly manager: EntityManager) { }

    async execute(dto: ISearchDoctorsByCriteriaDto): Promise<Doctor[]> {
        const doctorRepository = this.manager.getRepository(DoctorEntity);

        const usecase = new SearchDoctorsByCriteriaUseCase(new DoctorRepository(doctorRepository));
        return await (await usecase.searchDoctor(dto)).doctors;
    }
}