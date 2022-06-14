import { Body, Controller, Get, Param, Post, Query, Res } from '@nestjs/common';
import { join } from 'path';
import { EntityManager } from 'typeorm';
import { DoctorDto } from '../dtos/doctor.dto';
import { SearchDoctorsByCriteriaDto } from '../dtos/search-doctors-by-criteria.dto';
import { AuditingQueryServiceDecorator } from '../services/decorators/auditing.query.service.decorator';
import { ErrorHandlerQueryServiceDecorator } from '../services/decorators/error-handler.query.service.decorator';
import { SearchDoctorsByCriteriaService } from '../services/search-doctors-by-criteria.service';

@Controller('doctors')
export class DoctorsController {

    constructor(private readonly manager: EntityManager) { }

    @Post('search')
    async findDoctorsByCriteria(@Body() searchDoctorByCriteriaDto: SearchDoctorsByCriteriaDto, @Query('pageIndex') pageIndex, @Query('pageSize') pageSize): Promise<DoctorDto[]> {
        const service = new ErrorHandlerQueryServiceDecorator(
            new AuditingQueryServiceDecorator(
                new SearchDoctorsByCriteriaService(this.manager)
            )
        );

        return (await service.execute({ specialty: searchDoctorByCriteriaDto.specialty, pageIndex, pageSize })).doctors;
    }

    @Get('image/:imagename')
    async findDoctorImage(@Param('imagename') imagename, @Res() res): Promise<Object> {
        return res.sendFile(join(process.cwd(), 'src/uploads/doctors/' + imagename));
    }
}
