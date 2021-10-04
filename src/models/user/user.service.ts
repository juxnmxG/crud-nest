import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create.user.dto';
import { updateUserDto } from './dto/update.user.dto';
import { User } from './entity/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private readonly UserRepository: Repository <User>,
  ) {}
  async getUsers() {
    return await this.UserRepository.find();
  }

  async getUser(id: number) {
    return await this.UserRepository.findOne({
      where: {
        id: id,
      },
    });
  }

  async addUser(data: CreateUserDto) {
    const rol = this.UserRepository.create(data as any);
    return await this.UserRepository.save(rol);
  }

  async deleteUser(id: number) {
    await this.UserRepository.delete({ id });
    return await this.UserRepository.findOne({ id });
  }

  async updateUser(id: number, data: updateUserDto) {
    await this.UserRepository.update({ id }, data as any);
    return await { message: 'delete true' };
  }
}
