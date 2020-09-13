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
    code: 'USD'
  },
  {
    code: 'ARS'
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
    const cityRepository = queryRunner.connection.getRepository(City);
    const categoryRepository = queryRunner.connection.getRepository(Category);
    const currencyRepository = queryRunner.connection.getRepository(Currency);
    const conditionsRepository = queryRunner.connection.getRepository(Condition);
    const userRepository = queryRunner.connection.getRepository(User);
    const productRepository = queryRunner.connection.getRepository(Product);

    await cityRepository.insert(cities);
    await currencyRepository.insert(currencies);
    await conditionsRepository.insert(conditions);

    await categoryRepository.insert(categories);
    const tecnologyCategory = await categoryRepository.findOneOrFail({ where: { name: categories[0].name } });
    const booksCategory = await categoryRepository.findOneOrFail({ where: { name: categories[1].name } });
    const sportCategory = await categoryRepository.findOneOrFail({ where: { name: categories[2].name } });

    const tecnologySubCategories = [
      {
        name: 'Celulares y Teléfonos',
        parentCategory: tecnologyCategory
      },
      {
        name: 'Computación',
        parentCategory: tecnologyCategory
      },
      {
        name: 'Electrónica, Audio y Video',
        parentCategory: tecnologyCategory
      }
    ];

    await categoryRepository.insert(tecnologySubCategories);
    const phonesCategory = await categoryRepository.findOneOrFail({
      where: { name: tecnologySubCategories[0].name }
    });

    const phoneSubCategories = [
      {
        name: 'Apple',
        parentCategory: phonesCategory
      },
      {
        name: 'Samsung',
        parentCategory: phonesCategory
      },
      {
        name: 'Motorola',
        parentCategory: phonesCategory
      },
      {
        name: 'Xiaomi',
        parentCategory: phonesCategory
      }
    ];

    await categoryRepository.insert(phoneSubCategories);

    const booksSubCategories = [
      {
        name: 'Lanzamientos',
        parentCategory: booksCategory
      },
      {
        name: 'Best sellers',
        parentCategory: booksCategory
      },
      {
        name: 'Comics',
        parentCategory: booksCategory
      }
    ];

    await categoryRepository.insert(booksSubCategories);

    const sportSubCategories = [
      {
        name: 'Maquinas',
        parentCategory: sportCategory
      },
      {
        name: 'Yoga',
        parentCategory: sportCategory
      },
      {
        name: 'Musculación',
        parentCategory: sportCategory
      }
    ];

    await categoryRepository.insert(sportSubCategories);

    const users = [
      {
        username: 'julianAlvarez',
        sellAdressCity: await cityRepository.findOneOrFail({ where: { name: cities[0].name } })
      },
      {
        username: 'pepe32',
        sellAdressCity: await cityRepository.findOneOrFail({ where: { name: cities[1].name } })
      }
    ];

    await userRepository.insert(users);

    const products = [
      {
        category: await categoryRepository.findOneOrFail({ where: { name: phoneSubCategories[0].name } }),
        condition: await conditionsRepository.findOneOrFail({ where: { name: conditions[0].name } }),
        currency: await currencyRepository.findOneOrFail({ where: { code: currencies[0].code } }),
        user: await userRepository.findOneOrFail({ where: { username: users[0].username } }),
        description:
          'jashd askdhaskj askjh askjd ajskd kjashdk asdkjas hkas hkashd kashd ashd aksjd sjdhsajk d',
        freeShipping: false,
        pictureUrl: 'https://images-na.ssl-images-amazon.com/images/I/51V8ObWrpKL._AC_SX425_.jpg',
        price: 700,
        priceDecimals: 0,
        soldQuantity: 10,
        stockQuantity: 20,
        title: 'Iphone X'
      },
      {
        category: await categoryRepository.findOneOrFail({ where: { name: phoneSubCategories[0].name } }),
        condition: await conditionsRepository.findOneOrFail({ where: { name: conditions[0].name } }),
        currency: await currencyRepository.findOneOrFail({ where: { code: currencies[1].code } }),
        user: await userRepository.findOneOrFail({ where: { username: users[1].username } }),
        description:
          'jashd askdhaskj askjh askjd ajskd kjashdk asdkjas hkas hkashd kashd ashd aksjd sjdhsajk d',
        freeShipping: true,
        pictureUrl: 'https://images-na.ssl-images-amazon.com/images/I/61yX3VKY7GL._AC_SL1500_.jpg',
        price: 45999,
        priceDecimals: 99,
        soldQuantity: 1,
        stockQuantity: 2,
        title: 'Iphone 8'
      },
      {
        category: await categoryRepository.findOneOrFail({ where: { name: phoneSubCategories[1].name } }),
        condition: await conditionsRepository.findOneOrFail({ where: { name: conditions[1].name } }),
        currency: await currencyRepository.findOneOrFail({ where: { code: currencies[1].code } }),
        user: await userRepository.findOneOrFail({ where: { username: users[1].username } }),
        description:
          'jashd askdhaskj askjh askjd ajskd kjashdk asdkjas hkas hkashd kashd ashd aksjd sjdhsajk d',
        freeShipping: true,
        pictureUrl: 'https://images-na.ssl-images-amazon.com/images/I/61YVqHdFRxL._AC_SL1322_.jpg',
        price: 55999,
        priceDecimals: 50,
        soldQuantity: 0,
        stockQuantity: 1,
        title: 'Samsung S10 oferta último en stock, aprovechá!'
      },
      {
        category: await categoryRepository.findOneOrFail({ where: { name: booksSubCategories[1].name } }),
        condition: await conditionsRepository.findOneOrFail({ where: { name: conditions[1].name } }),
        currency: await currencyRepository.findOneOrFail({ where: { code: currencies[0].code } }),
        user: await userRepository.findOneOrFail({ where: { username: users[0].username } }),
        description:
          'jashd askdhaskj askjh askjd ajskd kjashdk asdkjas hkas hkashd kashd ashd aksjd sjdhsajk d',
        freeShipping: false,
        pictureUrl: 'https://images-na.ssl-images-amazon.com/images/I/51b7XbfMIIL.jpg',
        price: 45,
        priceDecimals: 0,
        soldQuantity: 2,
        stockQuantity: 10,
        title: 'Clean code'
      },
      {
        category: await categoryRepository.findOneOrFail({ where: { name: sportSubCategories[1].name } }),
        condition: await conditionsRepository.findOneOrFail({ where: { name: conditions[0].name } }),
        currency: await currencyRepository.findOneOrFail({ where: { code: currencies[1].code } }),
        user: await userRepository.findOneOrFail({ where: { username: users[1].username } }),
        description:
          'jashd askdhaskj askjh askjd ajskd kjashdk asdkjas hkas hkashd kashd ashd aksjd sjdhsajk d',
        freeShipping: true,
        pictureUrl:
          'https://www.deportesmd.com.ar/sistema/uploads/699/articulos/colchoneta-para-yoga-mat-pilates-6-mm-esterilla-6-mm-texturada-%20%283%29.jpg',
        price: 4500,
        priceDecimals: 0,
        soldQuantity: 26,
        stockQuantity: 1000,
        title: 'Yoga mat'
      }
    ];

    await productRepository.insert(products);
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
