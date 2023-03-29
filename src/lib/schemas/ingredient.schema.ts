export interface Ingredient {
  id: string;
  expiration: number;
  name: string;
  img_url: string;
  price: number;
  size: number;
}

export interface IngredientPaginated {
  id: string;
  quantity: number;
  name: string;
  img_url: string;
}
