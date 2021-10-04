import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from '../user/dto/create.user.dto';
import { User } from '../user/entity/user.entity';
import { CreateEmployeDto } from './dto/employe.create.dto';
import { UpdateEmployeDto } from './dto/employe.update.dto';
import { Employe } from './entities/employe.entity';

@Injectable()
export class EmployeService {
  constructor(
    @InjectRepository(Employe)
    private readonly clientRepository: Repository<Employe>,
    @InjectRepository(User)
    private readonly userRepository: Repository<User>
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
    let user: CreateUserDto = new CreateUserDto();
    data.user_id = user.id;
    user.role_id = 2;
    const newUser = await this.userRepository.create(user as any);
    await this.userRepository.save(newUser);
    const employe = this.clientRepository.create(data as any);
    return await this.clientRepository.save(employe);
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
