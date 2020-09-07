import { MigrationInterface, QueryRunner } from 'typeorm';

export class UserModelUpdate1599506242403 implements MigrationInterface {
  name: string = 'UserModelUpdate1599506242403';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('ALTER TABLE "User" DROP CONSTRAINT "FK_bb520fffd1cb93d76858790eae1"', undefined);
    await queryRunner.query('ALTER TABLE "User" ALTER COLUMN "sellAdressCityId" SET NOT NULL', undefined);
    await queryRunner.query(
      'ALTER TABLE "Product" DROP CONSTRAINT "FK_d69c41183ef6705b0da6200570d"',
      undefined
    );
    await queryRunner.query(
      'ALTER TABLE "Product" DROP CONSTRAINT "FK_8ef5f150b1cc15e66d09039129b"',
      undefined
    );
    await queryRunner.query(
      'ALTER TABLE "Product" DROP CONSTRAINT "FK_de75905c3b4987f4b5bb1472644"',
      undefined
    );
    await queryRunner.query(
      'ALTER TABLE "Product" DROP CONSTRAINT "FK_896e2e0f6dfa6f80117a79e1d7e"',
      undefined
    );
    await queryRunner.query('ALTER TABLE "Product" ALTER COLUMN "conditionId" SET NOT NULL', undefined);
    await queryRunner.query('ALTER TABLE "Product" ALTER COLUMN "currencyId" SET NOT NULL', undefined);
    await queryRunner.query('ALTER TABLE "Product" ALTER COLUMN "userId" SET NOT NULL', undefined);
    await queryRunner.query('ALTER TABLE "Product" ALTER COLUMN "categoryId" SET NOT NULL', undefined);
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
    await queryRunner.query('ALTER TABLE "Product" ALTER COLUMN "categoryId" DROP NOT NULL', undefined);
    await queryRunner.query('ALTER TABLE "Product" ALTER COLUMN "userId" DROP NOT NULL', undefined);
    await queryRunner.query('ALTER TABLE "Product" ALTER COLUMN "currencyId" DROP NOT NULL', undefined);
    await queryRunner.query('ALTER TABLE "Product" ALTER COLUMN "conditionId" DROP NOT NULL', undefined);
    await queryRunner.query(
      'ALTER TABLE "Product" ADD CONSTRAINT "FK_896e2e0f6dfa6f80117a79e1d7e" FOREIGN KEY ("categoryId") REFERENCES "Category"("id") ON DELETE NO ACTION ON UPDATE NO ACTION',
      undefined
    );
    await queryRunner.query(
      'ALTER TABLE "Product" ADD CONSTRAINT "FK_de75905c3b4987f4b5bb1472644" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE NO ACTION ON UPDATE NO ACTION',
      undefined
    );
    await queryRunner.query(
      'ALTER TABLE "Product" ADD CONSTRAINT "FK_8ef5f150b1cc15e66d09039129b" FOREIGN KEY ("currencyId") REFERENCES "Currency"("id") ON DELETE NO ACTION ON UPDATE NO ACTION',
      undefined
    );
    await queryRunner.query(
      'ALTER TABLE "Product" ADD CONSTRAINT "FK_d69c41183ef6705b0da6200570d" FOREIGN KEY ("conditionId") REFERENCES "Condition"("id") ON DELETE NO ACTION ON UPDATE NO ACTION',
      undefined
    );
    await queryRunner.query('ALTER TABLE "User" ALTER COLUMN "sellAdressCityId" DROP NOT NULL', undefined);
    await queryRunner.query(
      'ALTER TABLE "User" ADD CONSTRAINT "FK_bb520fffd1cb93d76858790eae1" FOREIGN KEY ("sellAdressCityId") REFERENCES "City"("id") ON DELETE NO ACTION ON UPDATE NO ACTION',
      undefined
    );
  }
}
