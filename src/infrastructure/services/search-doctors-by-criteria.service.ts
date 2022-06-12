import { SearchDoctorsByCriteriaUseCase } from "src/application/usecases/search-doctors-by-criteria.usecase";
import { EntityManager } from "typeorm";
import { ISearchDoctorsByCriteriaDto } from "../../application/dtos/search-doctors-by-criteria.dto.interface";
import { DoctorEntity } from "../entities/doctor.entity";
import { DoctorRepository } from "../repositories/doctor.repository";
import { IService } from "./interface/service.interface";
import { Injectable } from '@nestjs/common';
import { DoctorDto } from "../dtos/doctor.dto";
import { DoctorToDoctorDto } from "../mappers/doctor-to-doctor-dto.mapper";

@Injectable()
export class SearchDoctorsByCriteriaService implements IService<ISearchDoctorsByCriteriaDto, DoctorDto[]>{

    constructor(private readonly manager: EntityManager) { }

    async execute(dto: ISearchDoctorsByCriteriaDto): Promise<DoctorDto[]> {
        const doctorRepository = this.manager.getRepository(DoctorEntity);

        const usecase = new SearchDoctorsByCriteriaUseCase(new DoctorRepository(doctorRepository));
        const doctors = (await usecase.searchDoctor(dto)).doctors;

        const doctorDto: DoctorDto[] = [];

        doctors.forEach(doctor => {
            doctorDto.push(DoctorToDoctorDto.map(doctor));
        });

        return doctorDto;
    }
}