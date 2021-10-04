import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../user/entity/user.entity';
import { Rol } from './entities/rol.entity';
import { RolController } from './rol.controller';
import { RolService } from './rol.service';

@Module({
  imports: [TypeOrmModule.forFeature([Rol, User])],
  controllers: [RolController],
  providers: [RolService],
  exports: [TypeOrmModule],
})

export class RolModule {}
