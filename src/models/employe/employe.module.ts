import { Module } from '@nestjs/common';
import { EmployeService } from './employe.service';
import { EmployeController } from './employe.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Employe } from './entities/employe.entity';
import { User } from '../user/entity/user.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Employe, User])],
  providers: [EmployeService],
  controllers: [EmployeController],
  exports: [TypeOrmModule]
})
export class EmployeModule {}
