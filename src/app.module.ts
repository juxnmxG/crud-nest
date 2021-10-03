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

@Module({
  imports: [UserModule, RolModule, EmployeModule, ClientModule],
  controllers: [AppController, EmployeController, UserController, RolController, ClientController],
  providers: [AppService],
})
export class AppModule {}
