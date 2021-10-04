import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './models/user/user.module';
import { RolModule } from './models/rol/rol.module';
import { EmployeController } from './models/employe/employe.controller';
import { EmployeModule } from './models/employe/employe.module';
import { ClientModule } from './models/client/client.module';
import { UserController } from './models/user/user.controller';
import { RolController } from './models/rol/rol.controller';
import { ClientController } from './models/client/client.controller';
import { RolService } from './models/rol/rol.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Rol } from './models/rol/entities/rol.entity';
import { Connection } from 'typeorm';



@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'admin123',
      database: 'crud-nest',
      entities: [Rol],
      synchronize: true,
    }),
    UserModule,
    RolModule,
    EmployeModule,
    ClientModule,
  ],
  controllers: [
    AppController,
    EmployeController,
    UserController,
    RolController,
    ClientController,
  ],
  providers: [AppService, RolService],
})
export class AppModule {
  constructor(private connection: Connection){}
}
