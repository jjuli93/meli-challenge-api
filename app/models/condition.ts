import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'Condition' })
export class Condition {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('varchar')
  name: string;
}
