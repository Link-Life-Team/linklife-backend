import {
  Controller,
  Post,
  Body,
  Get,
  Query,
  UnauthorizedException,
  Request,
  UseGuards,
} from '@nestjs/common';
import { ApiTags, ApiOperation, ApiBody } from '@nestjs/swagger';

import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { RegisterDto } from './dto/register.dto';
import { Role } from '@prisma/client';
import { JwtAuthGuard } from './jwt.auth.guard';
@ApiTags('auth') // This will add a "Auth" section in Swagger
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  @ApiOperation({ summary: 'Register a new user' })
  @ApiBody({ type: RegisterDto }) // Explicitly defines the body type
  async register(@Body() registerDto: RegisterDto) {
    return this.authService.register(registerDto);
  }

  @Post('login')
  async login(@Body() loginDto: LoginDto) {
    return this.authService.login(loginDto);
  }

  @Get('users-by-role')
  async getUsersByRole(@Query('role') role: Role) {
    return this.authService.getUsersByRole(role);
  }

  @Get('me')
  @UseGuards(JwtAuthGuard)
  async getLoggedInUser(@Request() req: any) {
    console.log('Request User:', req.user); // Log user from token
    return req.user; // Return token's user payload
  }
}
