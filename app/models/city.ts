import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'City' })
export class City {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('varchar')
  name: string;
}
