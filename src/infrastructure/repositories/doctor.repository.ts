import { Doctor } from "src/domain/entities/doctor";
import { SpecialtyType } from "src/domain/enums/specialty-type.enum";
import { IRepository } from "src/domain/interfaces/repository.interface";
import { DoctorFirstName } from "src/domain/valueobjects/doctor/doctor-first-name";
import { DoctorId } from "src/domain/valueobjects/doctor/doctor-id";
import { DoctorImage } from "src/domain/valueobjects/doctor/doctor-image";
import { DoctorLastName } from "src/domain/valueobjects/doctor/doctor-last-name";
import { DoctorLocation } from "src/domain/valueobjects/doctor/doctor-location";
import { Repository } from "typeorm";
import { DoctorEntity } from "../entities/doctor.entity";
import { DoctorEntityToDoctor } from "../mappers/doctor-entity-to-doctor.mapper";

export class DoctorRepository implements IRepository<Doctor>{

    constructor(private readonly doctorRepository: Repository<DoctorEntity>) { }

    save(entity: Doctor): Promise<void> {
        throw new Error("Method not implemented.");
    }

    update(entity: Doctor): Promise<void> {
        throw new Error("Method not implemented.");
    }

    findOne(items: Partial<Doctor>): Promise<Doctor> {
        throw new Error("Method not implemented.");
    }

    async find(items: Partial<Doctor>, options?: { pageIndex: number, pageSize: number }): Promise<Doctor[]> {
        let entityDoctor: DoctorEntity[];

        if (items.Specialty[0]) {
            entityDoctor = await this.doctorRepository.find({ where: { specialties: { specialty: items.Specialty[0] } }, skip: options.pageIndex * options.pageSize, take: options.pageSize });
        }
        else {
            entityDoctor = await this.doctorRepository.find({ skip: options.pageIndex * options.pageSize, take: options.pageSize });
        }

        const domainDoctors: Doctor[] = [];

        entityDoctor.forEach(doctorEntity => {
            domainDoctors.push(DoctorEntityToDoctor.map(doctorEntity));
        });

        return domainDoctors;
    }

    delete(entity: Doctor): Promise<void> {
        throw new Error("Method not implemented.");
    }
}