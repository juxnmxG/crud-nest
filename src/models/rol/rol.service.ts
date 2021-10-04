import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateRol } from './dto/create.rol';
import { UpdateRol } from './dto/update.rol';
import { Rol } from './entities/rol.entity';

@Injectable()
export class RolService {
   constructor(
       @InjectRepository(Rol) private readonly rolRepository: Repository<Rol>
   ){}
   async getRols(){
    return await this.rolRepository.find();
  }

  getRol(id: number) {
    return { message: id };
  }

  addRol(dto: CreateRol) {
        return { message: 'add rol' };
      }

  deleteRol(id: number) {
    return { message: id };
  }

  updateRol(id: number, dto: UpdateRol) {
    return { message: id };
  }
}
