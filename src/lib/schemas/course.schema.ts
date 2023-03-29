import type { Ingredient } from "./ingredient.schema";

export interface Course {
  id: string;
  expiration: number;
  ingredients: Ingredient[];
  name: string;
  description: string;
  price: number;
  size: number;
}

export interface CoursePaginated {
  id: string;
  price: number;
  name: string;
  img_url: string;
}

