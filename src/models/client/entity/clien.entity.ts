import { User } from 'src/models/user/entity/user.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToMany,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Client {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToOne(() => User)
  @JoinColumn()
  user_id: User;

  @Column()
  name: string;

  @Column()
  lastname: string;

  @Column()
  address: string;

  @Column()
  phone: number;
}
