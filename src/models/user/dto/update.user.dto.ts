import { OmitType } from '@nestjs/swagger';
import { CreateUserDto } from './create.user.dto';

export class updateUserDto extends OmitType(CreateUserDto, ['id'] as const) {}
