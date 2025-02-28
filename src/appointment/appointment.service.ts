import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateAppointmentDto } from './dto/create-appointment.dto';
import { UpdateAppointmentDto } from './dto/update-appointment.dto';

@Injectable()
export class AppointmentService {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateAppointmentDto) {
    return this.prisma.appointment.create({
      data: {
        date: new Date(data.date), // Ensure it's a Date object
        userId: data.userId,
        hospitalId: data.hospitalId,
        status: data.status || 'PENDING',
      },
    });
  }

  async findAll() {
    return this.prisma.appointment.findMany({
      include: { user: true, hospital: true },
    });
  }

  async findOne(id: string) {
    return this.prisma.appointment.findUnique({
      where: { id },
      include: { user: true, hospital: true },
    });
  }

  async findByUser(userId: string) {
    return this.prisma.appointment.findMany({
      where: { userId },
      include: { hospital: true },
    });
  }

  async findByHospital(hospitalId: string) {
    return this.prisma.appointment.findMany({
      where: { hospitalId },
      include: { user: true },
    });
  }

  async update(id: string, data: UpdateAppointmentDto) {
    return this.prisma.appointment.update({ where: { id }, data });
  }

  async remove(id: string) {
    return this.prisma.appointment.delete({ where: { id } });
  }
}
