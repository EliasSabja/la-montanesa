import type { Ingredient } from "$lib/schemas/ingredient.schema";
import type { ApiItem } from "../schemas/item.schema";
import type { SearchItem } from "../schemas/search.schema";
import { API_URL } from '$lib/constants';

export interface IngredientApiData {
  ingredients: Ingredient[];
  pages: number;
}

export const getIngredientsFromApi = async (
  sort: string,
  order: string,
  page: number,
  size: number
): Promise<IngredientApiData> => {
  const ingredientList: Ingredient[] = [];

  try {
    const data: ApiItem = await fetch(`${API_URL}/ingredients?sort=${sort}&order=${order}&page=${page}&size=${size}`)
      .then(response => response.json());

    for await (const ingredientItem of data.items) {
      const ingredient = await getIngredientById(ingredientItem.id);
      ingredientList.push(ingredient);
    }

    const ingredientApiData = {
      ingredients: ingredientList,
      pages: data.pages
    }

    return ingredientApiData;
  } catch (e: any) {
    console.log("Error ingredientList: " + e.message);
    return {
      ingredients: [],
      pages: 0
    };
  }
}

export const getIngredientById = async (id: string): Promise<Ingredient> => {
  try {
    const ingredient = await fetch(`${API_URL}/ingredients/${id}`).then(response => response.json());
    return ingredient;
  } catch (e: any) {
    console.log("Error getting ingredient by id: " + e.message);
    return {} as Ingredient;
  }
}

export const searchIngredientsFromApi = async (search: string): Promise<SearchItem[]> => {
  try {
    if (!search) return [];
    const ingredients = await fetch(`${API_URL}/search/ingredients?name=${search}`).then(response => response.json());
    if (!ingredients) return [];

    const slicedIngredients = ingredients.slice(0, 5);
    
    const searchItems: SearchItem[] = slicedIngredients.map((ingredient: SearchItem ) => {
      return {
        id: ingredient.id,
        name: ingredient.name,
        category: "ingredients"
      }
    });

    return searchItems;
  } catch (e: any) {
    console.log("Error search ingredient: " + e.message);
    return [];
  }
}
