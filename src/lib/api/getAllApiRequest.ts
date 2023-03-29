import type { ApiItem } from "../schemas/item.schema";

export const getAllApiRequest = async (
  url: string, 
  sort: string,
  order: string,
  page: number,
  size: number
): Promise<ApiItem[]> => {
  console.log("Getting items from API");
  const data: ApiItem[] = await fetch(`${url}?sort=${sort}&order=${order}&page=${page}&size=${size}`)
    .then(response => response.json());

  console.log(data);
  return data ?? [];
}


export function myFunction(name: string) {
  console.log(`Hello, ${name}!`);
}
