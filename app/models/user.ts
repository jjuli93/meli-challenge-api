import { Column, Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { City } from './city';

@Entity({ name: 'User' })
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('varchar')
  username: string;

  @ManyToOne(() => City, { nullable: false, eager: true })
  @JoinColumn({ name: 'sellAdressCityId' })
  sellAdressCity: City;
}
