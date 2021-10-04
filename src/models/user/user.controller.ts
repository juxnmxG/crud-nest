import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create.user.dto';
import { updateUserDto } from './dto/update.user.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService){}
  @Get()
  getUsers() {
    return this.userService.getUsers();
  }
  @Get(':id')
  getUser(@Param('id') id: number) {
    return this.userService.getUser(id);
  }
  @Post()
  addUser(@Body() dto: CreateUserDto) {
    return this.userService.addUser(dto);
  }
  @Delete('id')
  deleteUser(@Param('id') id: number) {
    return this.userService.deleteUser(id);
  }
  @Put('id')
  updateUser(@Param('id') id: number, @Body() dto: updateUserDto) {
    return this.userService.updateUser(id, dto);
  }
}
