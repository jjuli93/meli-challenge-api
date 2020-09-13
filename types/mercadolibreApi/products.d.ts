export interface Product {
  id: string;
  title: string;
  currency_id: string;
  pictures: [
    {
      url: string;
    }
  ];
  price: number;
  thumbnail: string;
  condition: string;
  shipping: {
    free_shipping: boolean;
  };
  address: {
    state_name: string;
  };
  sold_quantity: number;
  category_id: string;
}

export interface Category {
  id: string;
  name: string;
}

export interface CategoryDetail {
  path_from_root: Category[];
}

export interface Description {
  plain_text: string;
}
