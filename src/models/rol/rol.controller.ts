import {
  Controller,
  Get,
  Post,
  Delete,
  Param,
  Put,
  Body,
} from '@nestjs/common';
import { CreateRol } from './dto/create.rol';
import { UpdateRol } from './dto/update.rol';
import { RolService } from './rol.service';

@Controller('rol')
export class RolController {

  constructor(private readonly rol: RolService) {}
  
  @Get()
  getRols() {
    return this.rol.getRols();
  }
  @Get(':id')
  getRol(@Param('id') id: number) {
    return this.rol.getRol(id);
  }
  @Post()
  addRol(@Body() dto: CreateRol) {
    return this.rol.addRol(dto);
  }
  @Delete(':id')
  deleteRol(@Param('id') id: number) {
    return this.rol.deleteRol(id);
  }
  @Put(':id')
  updateRol(@Param('id') id: number, @Body() dto: UpdateRol) {
    return this.rol.updateRol(id, dto);
  }
}
