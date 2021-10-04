import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Rol } from 'src/models/rol/entities/rol.entity';
@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToMany(type => Rol, rol => rol.id)
  role_id: Rol[];

  @Column()
  username: string;

  @Column()
  password: string;

  @Column()
  created: Date;
}