import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'Currency' })
export class Currency {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('varchar')
  code: string;
}
