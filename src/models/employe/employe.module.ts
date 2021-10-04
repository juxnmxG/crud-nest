import { Module } from '@nestjs/common';
import { EmployeService } from './employe.service';

@Module({
  providers: [EmployeService]
})
export class EmployeModule {}
