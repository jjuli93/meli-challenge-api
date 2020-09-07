import { Column, Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

@Entity({ name: 'Category' })
export class Category {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('varchar')
  name: string;

  @ManyToOne(() => Category, { nullable: true })
  @JoinColumn({ name: 'parentCategoryId' })
  parentCategory: Category;
}
