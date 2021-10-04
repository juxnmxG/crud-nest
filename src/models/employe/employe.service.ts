import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateEmployeDto } from './dto/employe.create.dto';
import { UpdateEmployeDto } from './dto/employe.update.dto';
import { Employe } from './entities/employe.entity';

@Injectable()
export class EmployeService {
    constructor(
        @InjectRepository (Employe) private readonly clientRepository: Repository <Employe>,
      ) {}
      async getEmployees() {
        return await this.clientRepository.find();
      }
    
      async getEmploye(id: number) {
        return await this.clientRepository.findOne({
          where: {
            id: id,
          },
        });
      }
    
      async addEmploye(data: CreateEmployeDto) {
        const rol = this.clientRepository.create(data as any);
        return await this.clientRepository.save(rol);
      }
    
      async deleteEmploye(id: number) {
        await this.clientRepository.delete({ id });
        return await this.clientRepository.findOne({ id });
      }
    
      async updateEmploye(id: number, data: UpdateEmployeDto) {
        await this.clientRepository.update({ id }, data as any);
        return await { message: 'delete true' };
      }
}
