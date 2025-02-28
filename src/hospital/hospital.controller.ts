import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { HospitalService } from './hospital.service';
import { CreateHospitalDto } from './dto/create-hospital.dto';
import { UpdateHospitalDto } from './dto/update-hospital.dto';

@Controller('hospitals')
export class HospitalController {
  constructor(private readonly hospitalService: HospitalService) {}

  @Post()
  create(@Body() data: CreateHospitalDto) {
    return this.hospitalService.create(data);
  }

  @Get()
  findAll() {
    return this.hospitalService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.hospitalService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() data: UpdateHospitalDto) {
    return this.hospitalService.update(id, data);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.hospitalService.remove(id);
  }
}
