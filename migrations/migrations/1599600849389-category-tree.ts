import { MigrationInterface, QueryRunner } from 'typeorm';

export class CategoryTree1599600849389 implements MigrationInterface {
  name: string = 'categoryTree1599600849389';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('ALTER TABLE "Category" ADD "mpath" character varying DEFAULT \'\'', undefined);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('ALTER TABLE "Category" DROP COLUMN "mpath"', undefined);
  }
}
