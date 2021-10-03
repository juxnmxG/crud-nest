import { IsNumber, IsString, Length } from 'class-validator';

export class CreateRol {
  @IsNumber()
  id: String;

  @IsString()
  @Length(1, 20)
  description: String;
}
