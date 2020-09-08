import { Column, Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn, Tree, TreeParent } from 'typeorm';

@Entity({ name: 'Category' })
@Tree('materialized-path')
export class Category {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('varchar')
  name: string;

  @ManyToOne(() => Category, { nullable: true })
  @JoinColumn({ name: 'parentCategoryId' })
  @TreeParent()
  parentCategory: Category | null;
}
