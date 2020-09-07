import { MigrationInterface, QueryRunner } from 'typeorm';
import { Product } from '../../app/models/product';
import { Currency } from '../../app/models/currency';
import { City } from '../../app/models/city';
import { User } from '../../app/models/user';
import { Category } from '../../app/models/category';
import { Condition } from '../../app/models/condition';

const cities = [
  {
    name: 'Capital federal'
  },
  {
    name: 'Mendoza'
  }
];

const categories = [
  {
    name: 'Tecnología'
  },
  {
    name: 'Libros'
  },
  {
    name: 'Deportes y Aire Libre'
  }
];

const currencies = [
  {
    code: 'usd'
  },
  {
    code: 'ars'
  }
];

const conditions = [
  {
    name: 'Nuevo'
  },
  {
    name: 'Usado'
  }
];

export class MockDataInsertion1599501525246 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.connection.getRepository(City).insert(cities);
    await queryRunner.connection.getRepository(Category).insert(categories);
    await queryRunner.connection.getRepository(Currency).insert(currencies);
    await queryRunner.connection.getRepository(Condition).insert(conditions);

    const users = [
      {
        username: 'julianAlvarez',
        sellAdressCity: await queryRunner.connection
          .getRepository(City)
          .findOneOrFail({ where: { name: cities[0].name } })
      },
      {
        username: 'pepe32',
        sellAdressCity: await queryRunner.connection
          .getRepository(City)
          .findOneOrFail({ where: { name: cities[1].name } })
      }
    ];

    await queryRunner.connection.getRepository(User).insert(users);

    const products = [
      {
        category: await queryRunner.connection
          .getRepository(Category)
          .findOneOrFail({ where: { name: categories[0].name } }),
        condition: await queryRunner.connection
          .getRepository(Condition)
          .findOneOrFail({ where: { name: conditions[0].name } }),
        currency: await queryRunner.connection
          .getRepository(Currency)
          .findOneOrFail({ where: { name: currencies[0].code } }),
        user: await queryRunner.connection
          .getRepository(User)
          .findOneOrFail({ where: { username: users[0].username } }),
        description:
          'jashd askdhaskj askjh askjd ajskd kjashdk asdkjas hkas hkashd kashd ashd aksjd sjdhsajk d',
        freeShipping: false,
        pictureUrl: 'https://images-na.ssl-images-amazon.com/images/I/51V8ObWrpKL._AC_SX425_.jpg',
        price: 700,
        priceDecimals: 0,
        soldQuantity: 10,
        stockQuantity: 20,
        title: 'Iphone X'
      }
    ];

    await queryRunner.connection.getRepository(Product).insert(products);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.connection
      .getRepository(Product)
      .createQueryBuilder()
      .delete()
      .execute();

    await queryRunner.connection
      .getRepository(User)
      .createQueryBuilder()
      .delete()
      .execute();

    await queryRunner.connection
      .getRepository(City)
      .createQueryBuilder()
      .delete()
      .execute();

    await queryRunner.connection
      .getRepository(Category)
      .createQueryBuilder()
      .delete()
      .execute();

    await queryRunner.connection
      .getRepository(Currency)
      .createQueryBuilder()
      .delete()
      .execute();

    await queryRunner.connection
      .getRepository(Condition)
      .createQueryBuilder()
      .delete()
      .execute();
  }
}
