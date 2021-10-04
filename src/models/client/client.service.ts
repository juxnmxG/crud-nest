import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateClientDto } from './dto/create.client.dto';
import { updateClientDto } from './dto/update.client.dto';
import { Client } from './entity/clien.entity';

@Injectable()
export class ClientService {
  constructor(
    @InjectRepository (Client) private readonly clientRepository: Repository<Client>,
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
    const rol = this.clientRepository.create(data as any);
    return await this.clientRepository.save(rol);
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
