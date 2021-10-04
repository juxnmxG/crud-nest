import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from '../user/dto/create.user.dto';
import { User } from '../user/entity/user.entity';
import { CreateClientDto } from './dto/create.client.dto';
import { updateClientDto } from './dto/update.client.dto';
import { Client } from './entity/clien.entity';

@Injectable()
export class ClientService {
  constructor(
    @InjectRepository(Client)
    private readonly clientRepository: Repository<Client>,
    @InjectRepository(User) private readonly userRepository: Repository<User>,
  ) {}
  async getClients() {
    return await this.clientRepository.find();
  }

  async getClient(id: number) {
    return await this.clientRepository.findOne({
      where: {
        id: id,
      },
    });
  }

  async addClient(data: CreateClientDto) {
    const user: CreateUserDto = new CreateUserDto();
    data.user_id = user.id;
    const newUser = await this.userRepository.create(user as any);
    await this.userRepository.save(newUser);
    const client = await this.clientRepository.create(data as any);
    return await this.clientRepository.save(client);
  }

  async deleteClient(id: number) {
    await this.clientRepository.delete({ id });
    return await this.clientRepository.findOne({ id });
  }

  async updateClient(id: number, data: updateClientDto) {
    await this.clientRepository.update({ id }, data as any);
    return await { message: 'delete true' };
  }
}
