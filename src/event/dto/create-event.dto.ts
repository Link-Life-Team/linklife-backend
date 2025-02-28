import { ApiProperty } from '@nestjs/swagger';

export class CreateEventDto {
  @ApiProperty({
    type: String,
    example: 'Health Awareness Camp',
    description: 'Name of the event',
  })
  name: string;

  @ApiProperty({
    type: String,
    example: 'A seminar on public health awareness',
    description: 'Event description',
  })
  description: string;

  @ApiProperty({
    type: String,
    example: '2024-06-15T10:00:00.000Z',
    description: 'Event date',
  })
  date: Date;

  @ApiProperty({
    type: String,
    example: '2024-06-15T10:00:00.000Z',
    description: 'Start time of the event',
  })
  startTime: Date;

  @ApiProperty({
    type: String,
    example: '2024-06-15T12:00:00.000Z',
    description: 'End time of the event',
  })
  endTime: Date;

  @ApiProperty({
    type: Number,
    example: 100,
    description: 'Total number of expected attendants',
  })
  attendantsTotal: number;

  @ApiProperty({
    type: String,
    example: 'Main Hall, City Hospital',
    description: 'Location of the event',
  })
  location: string;

  @ApiProperty({
    type: String,
    example: '123e4567-e89b-12d3-a456-426614174000',
    description: 'Hospital ID hosting the event',
  })
  hospitalId: string;
}
