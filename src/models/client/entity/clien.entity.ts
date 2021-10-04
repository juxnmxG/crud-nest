import { User } from 'src/models/user/entity/user.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Client {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToMany((type) => User, (rol) => rol.id)
  user_id: number;

  @Column()
  name: string;

  @Column()
  lastname: string;

  @Column()
  address: string;

  @Column()
  phone: number;
}
