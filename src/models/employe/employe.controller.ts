import { Controller, Get, Put, Body, Delete, Param, Post } from '@nestjs/common';
import { CreateEmployeDto } from './dto/employe.create.dto';
import { UpdateEmployeDto } from './dto/employe.update.dto';
import { EmployeService } from './employe.service';

@Controller('employe')
export class EmployeController {
  constructor(private readonly EmployeService: EmployeService) {}
  @Get ()
  getUsers() {
    return this.EmployeService.getEmployees();
  }
  @Get(':id')
  getUser(@Param('id') id: number) {
    return this.EmployeService.getEmploye(id);
  }
  @Post()
  addUser(@Body() dto: CreateEmployeDto) {
    return this.EmployeService.addEmploye(dto);
  }
  @Delete('id')
  deleteUser(@Param('id') id: number) {
    return this.EmployeService.deleteEmploye(id);
  }
  @Put('id')
  updateUser(@Param('id') id: number, @Body() dto: UpdateEmployeDto) {
    return this.EmployeService.updateEmploye(id, dto);
  }
}
