import { Column, Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Condition } from './condition';
import { Currency } from './currency';
import { User } from './user';
import { Category } from './category';

@Entity({ name: 'Product' })
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('varchar')
  title: string;

  @Column('int')
  price: number;

  @Column('int')
  priceDecimals: number;

  @Column('varchar')
  pictureUrl: string;

  @Column('boolean')
  freeShipping: boolean;

  @Column('int')
  stockQuantity: number;

  @Column('int')
  soldQuantity: number;

  @Column('varchar')
  description: string;

  @ManyToOne(() => Condition, { nullable: false, eager: true })
  @JoinColumn({ name: 'conditionId' })
  condition: Condition;

  @ManyToOne(() => Currency, { nullable: false, eager: true })
  @JoinColumn({ name: 'currencyId' })
  currency: Currency;

  @ManyToOne(() => User, { nullable: false, eager: true })
  @JoinColumn({ name: 'userId' })
  user: User;

  @ManyToOne(() => Category, { nullable: false, eager: true })
  @JoinColumn({ name: 'categoryId' })
  category: Category;
}
