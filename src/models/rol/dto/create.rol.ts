import { IsNumber, IsString, Length } from 'class-validator';

export class CreateRol {
  @IsString()
  @Length(1, 20)
  description: String;
}
