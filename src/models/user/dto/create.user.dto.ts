import { IsDate, IsNumber, IsString } from 'class-validator';

export class CreateUserDto {
  @IsNumber()
  id: number;

  @IsNumber()
  role_id: number;

  @IsString()
  username: String;

  @IsString()
  password: String;

  @IsDate()
  created: Date;
}
