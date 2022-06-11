import { Body, Controller, Post, Query } from '@nestjs/common';
import { Doctor } from 'src/domain/entities/doctor';
import { EntityManager } from 'typeorm';
import { SearchDoctorsByCriteriaDto } from '../dtos/search-doctors-by-criteria.dto';
import { AuditingServiceDecorator } from '../services/decorators/auditing.service.decorator';
import { ErrorHandlingServiceDecorator } from '../services/decorators/error-handling.service.decorator';
import { SearchDoctorsByCriteriaService } from '../services/search-doctors-by-criteria.service';

@Controller('doctors')
export class DoctorsController {

    constructor(private readonly manager: EntityManager) { }

    @Post('search')
    async findChildcarerByCriteria(@Body() searchDoctorByCriteriaDto: SearchDoctorsByCriteriaDto, @Query('pageIndex') pageIndex, @Query('pageSize') pageSize): Promise<Doctor[]> {
        const service = new ErrorHandlingServiceDecorator(
            new AuditingServiceDecorator(
                new SearchDoctorsByCriteriaService(this.manager)
            )
        );

        return (await service.execute(searchDoctorByCriteriaDto)).doctors;
    }
}
