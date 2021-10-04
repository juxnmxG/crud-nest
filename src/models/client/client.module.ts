import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../user/entity/user.entity';
import { ClientController } from './client.controller';
import { ClientService } from './client.service';
import { Client } from './entity/clien.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Client, User])],
  controllers: [ClientController],
  providers: [ClientService],
  exports: [TypeOrmModule]
})
export class ClientModule {}
