import { PrismaService } from 'src/prisma/prisma.service';
import { CreateHospitalDto } from './dto/create-hospital.dto';
import { UpdateHospitalDto } from './dto/update-hospital.dto';
import { Injectable } from '@nestjs/common';

@Injectable()
export class HospitalService {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateHospitalDto) {
    return this.prisma.hospital.create({ data });
  }

  async findAll() {
    return this.prisma.hospital.findMany({
      include: { appointments: true, events: true },
    });
  }

  async findOne(id: string) {
    return this.prisma.hospital.findUnique({
      where: { id },
      include: { appointments: true, events: true },
    });
  }

  async update(id: string, data: UpdateHospitalDto) {
    return this.prisma.hospital.update({ where: { id }, data });
  }

  async remove(id: string) {
    return this.prisma.hospital.delete({ where: { id } });
  }
}
