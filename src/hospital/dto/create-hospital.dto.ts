import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateHospitalDto {
  @ApiProperty()
  @IsString()
  name: string;
  @ApiProperty()
  @IsString()
  location: string;
}
