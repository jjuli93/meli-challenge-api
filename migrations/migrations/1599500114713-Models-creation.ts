import { MigrationInterface, QueryRunner } from 'typeorm';

export class ModelsCreation1599500114713 implements MigrationInterface {
  name: string = 'modelsCreation1599500114713';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      'CREATE TABLE "Category" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "parentCategoryId" integer, CONSTRAINT "PK_c2727780c5b9b0c564c29a4977c" PRIMARY KEY ("id"))',
      undefined
    );
    await queryRunner.query(
      'CREATE TABLE "City" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, CONSTRAINT "PK_1c5a287828771160a6e703cd37e" PRIMARY KEY ("id"))',
      undefined
    );
    await queryRunner.query(
      'CREATE TABLE "Condition" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, CONSTRAINT "PK_b00b3772eaa98eccbb9430d5930" PRIMARY KEY ("id"))',
      undefined
    );
    await queryRunner.query(
      'CREATE TABLE "Currency" ("id" SERIAL NOT NULL, "code" character varying NOT NULL, CONSTRAINT "PK_f0c829663a81fd9fc08536b664d" PRIMARY KEY ("id"))',
      undefined
    );
    await queryRunner.query(
      'CREATE TABLE "User" ("id" SERIAL NOT NULL, "username" character varying NOT NULL, "sellAdressCityId" integer, CONSTRAINT "PK_9862f679340fb2388436a5ab3e4" PRIMARY KEY ("id"))',
      undefined
    );
    await queryRunner.query(
      'CREATE TABLE "Product" ("id" SERIAL NOT NULL, "title" character varying NOT NULL, "price" integer NOT NULL, "priceDecimals" integer NOT NULL, "pictureUrl" character varying NOT NULL, "freeShipping" boolean NOT NULL, "stockQuantity" integer NOT NULL, "soldQuantity" integer NOT NULL, "description" character varying NOT NULL, "conditionId" integer, "currencyId" integer, "userId" integer, "categoryId" integer, CONSTRAINT "PK_9fc040db7872192bbc26c515710" PRIMARY KEY ("id"))',
      undefined
    );
    await queryRunner.query(
      'ALTER TABLE "Category" ADD CONSTRAINT "FK_5093c6afec9454fa67ad41697d2" FOREIGN KEY ("parentCategoryId") REFERENCES "Category"("id") ON DELETE NO ACTION ON UPDATE NO ACTION',
      undefined
    );
    await queryRunner.query(
      'ALTER TABLE "User" ADD CONSTRAINT "FK_bb520fffd1cb93d76858790eae1" FOREIGN KEY ("sellAdressCityId") REFERENCES "City"("id") ON DELETE NO ACTION ON UPDATE NO ACTION',
      undefined
    );
    await queryRunner.query(
      'ALTER TABLE "Product" ADD CONSTRAINT "FK_d69c41183ef6705b0da6200570d" FOREIGN KEY ("conditionId") REFERENCES "Condition"("id") ON DELETE NO ACTION ON UPDATE NO ACTION',
      undefined
    );
    await queryRunner.query(
      'ALTER TABLE "Product" ADD CONSTRAINT "FK_8ef5f150b1cc15e66d09039129b" FOREIGN KEY ("currencyId") REFERENCES "Currency"("id") ON DELETE NO ACTION ON UPDATE NO ACTION',
      undefined
    );
    await queryRunner.query(
      'ALTER TABLE "Product" ADD CONSTRAINT "FK_de75905c3b4987f4b5bb1472644" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE NO ACTION ON UPDATE NO ACTION',
      undefined
    );
    await queryRunner.query(
      'ALTER TABLE "Product" ADD CONSTRAINT "FK_896e2e0f6dfa6f80117a79e1d7e" FOREIGN KEY ("categoryId") REFERENCES "Category"("id") ON DELETE NO ACTION ON UPDATE NO ACTION',
      undefined
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      'ALTER TABLE "Product" DROP CONSTRAINT "FK_896e2e0f6dfa6f80117a79e1d7e"',
      undefined
    );
    await queryRunner.query(
      'ALTER TABLE "Product" DROP CONSTRAINT "FK_de75905c3b4987f4b5bb1472644"',
      undefined
    );
    await queryRunner.query(
      'ALTER TABLE "Product" DROP CONSTRAINT "FK_8ef5f150b1cc15e66d09039129b"',
      undefined
    );
    await queryRunner.query(
      'ALTER TABLE "Product" DROP CONSTRAINT "FK_d69c41183ef6705b0da6200570d"',
      undefined
    );
    await queryRunner.query('ALTER TABLE "User" DROP CONSTRAINT "FK_bb520fffd1cb93d76858790eae1"', undefined);
    await queryRunner.query(
      'ALTER TABLE "Category" DROP CONSTRAINT "FK_5093c6afec9454fa67ad41697d2"',
      undefined
    );
    await queryRunner.query('DROP TABLE "Product"', undefined);
    await queryRunner.query('DROP TABLE "User"', undefined);
    await queryRunner.query('DROP TABLE "Currency"', undefined);
    await queryRunner.query('DROP TABLE "Condition"', undefined);
    await queryRunner.query('DROP TABLE "City"', undefined);
    await queryRunner.query('DROP TABLE "Category"', undefined);
  }
}
