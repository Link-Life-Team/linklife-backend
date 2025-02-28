import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { HospitalModule } from './hospital/hospital.module';
import { EventModule } from './event/event.module';

@Module({
  imports: [AuthModule, UsersModule, HospitalModule, EventModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
