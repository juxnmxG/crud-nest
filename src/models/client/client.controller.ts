import { Controller, Get, Post, Delete, Param, Body, Put } from '@nestjs/common';
import { ClientService } from './client.service';
import { CreateClientDto } from './dto/create.client.dto';
import { updateClientDto } from './dto/update.client.dto';

@Controller('client')
export class ClientController {
  constructor(private readonly ClientService: ClientService) {}
  @Get()
  getUsers() {
    return this.ClientService.getClients();
  }
  @Get(':id')
  getUser(@Param ('id') id: number) {
    return this.ClientService.getClient(id);
  }
  @Post()
  addUser(@Body () dto: CreateClientDto) {
    return this.ClientService.addClient(dto);
  }
  @Delete('id')
  deleteUser(@Param('id') id: number) {
    return this.ClientService.deleteClient(id);
  }
  @Put ('id')
  updateUser(@Param('id') id: number, @Body() dto: updateClientDto) {
    return this.ClientService.updateClient(id, dto);
  }
}
