import { IsNumber, IsString } from 'class-validator';

export class CreateClientDto {
  @IsNumber()
  id: number;

  @IsNumber()
  user_id: number;

  @IsString()
  name: String;

  @IsString()
  lastname: String;

  @IsString()
  address: String;

  @IsNumber()
  created: number;
}
