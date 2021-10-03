import { Controller, Delete, Get, Post } from '@nestjs/common';

@Controller('user')
export class UserController {
  @Get()
  getUser() {
    return 'all user';
  }
  @Post()
  addUser() {
    return 'delete user';
  }
  @Delete()
  deleteUser(){
      return "delete user";
  }

}
