import { ApiProperty } from '@nestjs/swagger';
import { Role } from '@prisma/client';
import {
  IsBoolean,
  IsEmail,
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsString,
  MinLength,
} from 'class-validator';
import { Gender } from '../enums/gender.enum';

export class User {
  @ApiProperty()
  @IsEmail({}, { message: 'Invalid Email' })
  email?: string;
  @ApiProperty()
  fullname: string;
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  telephone: string;
  @ApiProperty()
  @IsEnum(Gender)
  gender?: Gender;
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  location: string;
  @ApiProperty()
  @MinLength(6, { message: 'Password must be atlest 6 character long' })
  password: string;
  @ApiProperty()
  @MinLength(6, { message: 'Confirm Passowrd must be atlest 6 character long' })
  confirmPassword: string;
  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  canDonate?: boolean;
  @ApiProperty({ isArray: true, enum: Role })
  roles: Role[];
}
