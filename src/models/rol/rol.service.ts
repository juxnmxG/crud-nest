import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../user/entity/user.entity';
import { CreateRol } from './dto/create.rol';
import { UpdateRol } from './dto/update.rol';
import { Rol } from './entities/rol.entity';

@Injectable()
export class RolService {
  constructor(
    @InjectRepository(Rol) private readonly rolRepository: Repository<Rol>,
    @InjectRepository(User) private readonly userRepository: Repository<User>,  
    ) {}
  async getRols() {
    return await this.rolRepository.find();
  }

  async getRol(id: number) {
    return await this.userRepository.findOne({
      where: {
        role_id: id,
      },
    });
  }

  async addRol(data: CreateRol) {
    const rol = this.rolRepository.create(data as any);
    return await this.rolRepository.save(rol);
  }

  async deleteRol(id: number) {
    await this.rolRepository.delete({ id })
    return await this.rolRepository.findOne({ id });
  }

  async updateRol(id: number, data: UpdateRol) {
    await this.rolRepository.update({ id }, data as any);
    return await { message: "delete true" };
  }
}
