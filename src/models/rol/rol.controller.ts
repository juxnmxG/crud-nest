import { Controller, Get, Post, Delete, Param, Put, Body } from '@nestjs/common';
import { CreateRol } from './dto/create.rol';

@Controller('rol')
export class RolController {
  @Get()
  getRols() {
    return 'All Rols';
  }
  @Get(':id')
  getRol(@Param('id') id: number) {
    return { message: 'one rol' };
  }
  @Post()
  addRol(@Body() dto: CreateRol) {
    return dto;
  }
  @Delete(':id')
  deleteRol(@Param('id') id: number) {
    return 'delete rol';
  }
  @Put(':id')
  updateRol(@Param('id') id: number) {
    return 'update';
  }
}
