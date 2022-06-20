import { SearchDoctorsByCriteriaUseCase } from "../../application/usecases/search-doctors-by-criteria.usecase";
import { EntityManager } from "typeorm";
import { DoctorEntity } from "../entities/doctor.entity";
import { DoctorRepository } from "../repositories/doctor.repository";
import { IQueryService } from "./interface/query-service.interface";
import { Injectable } from '@nestjs/common';
import { DoctorDto } from "../dtos/doctor.dto";
import { DoctorToDoctorDto } from "../mappers/doctor-to-doctor-dto.mapper";
import { ISearchDoctorsByCriteriaResponseDto } from "./dtos/search-doctors-by-criteria-response.dto";
import { ISearchDoctorsByCriteriaRequestDto } from "./dtos/search-doctors-by-criteria-request.dto";

@Injectable()
export class SearchDoctorsByCriteriaService implements IQueryService<ISearchDoctorsByCriteriaRequestDto, ISearchDoctorsByCriteriaResponseDto>{

    constructor(private readonly manager: EntityManager) { }

    async execute(dto: ISearchDoctorsByCriteriaRequestDto): Promise<ISearchDoctorsByCriteriaResponseDto> {
        const doctorRepository = this.manager.getRepository(DoctorEntity);

        const usecase = new SearchDoctorsByCriteriaUseCase(new DoctorRepository(doctorRepository));
        const doctors = (await usecase.searchDoctor(dto)).doctors;

        const doctorDto: DoctorDto[] = [];

        doctors.forEach(doctor => {
            doctorDto.push(DoctorToDoctorDto.map(doctor));
        });

        return { doctors: doctorDto };
    }
}