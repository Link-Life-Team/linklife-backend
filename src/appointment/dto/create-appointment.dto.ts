import { ApiProperty } from '@nestjs/swagger';
import { AppointmentStatus } from '@prisma/client';
import { IsEnum, IsISO8601 } from 'class-validator';

export class CreateAppointmentDto {
  @ApiProperty({
    example: '2024-03-01T10:00:00Z',
    description: 'Appointment date in ISO format',
  })
  @IsISO8601()
  date: Date;

  @ApiProperty({
    example: 'PENDING',
    enum: ['PENDING', 'CONFIRMED', 'CANCELLED'],
    required: false,
  })
  @ApiProperty({
    example: 'PENDING',
    enum: AppointmentStatus,
    description: 'Status of the appointment',
  })
  @IsEnum(AppointmentStatus)
  status?: AppointmentStatus;
  @ApiProperty({ example: 'user-id-123' })
  userId: string;

  @ApiProperty({ example: 'hospital-id-456' })
  hospitalId: string;
}
