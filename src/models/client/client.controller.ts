import { Controller, Get, Post, Delete } from '@nestjs/common';

@Controller('client')
export class ClientController {
  @Get()
  getClient() {
    return 'all user';
  }
  @Post()
  addClient() {
    return 'delete user';
  }
  @Delete()
  deleteUser() {
    return 'delete user';
  }
}
