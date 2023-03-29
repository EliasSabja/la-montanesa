import type { Tray } from "$lib/schemas/tray.schema";
import type { ApiItem } from "../schemas/item.schema";
import type { SearchItem } from "../schemas/search.schema";
import { API_URL } from '$lib/constants';

export interface TrayApiData {
  trays: Tray[];
  pages: number;
}

export const getTraysFromApi = async (
  sort: string,
  order: string,
  page: number,
  size: number
): Promise<TrayApiData> => {
  const trayList: Tray[] = [];

  try {
    const data: ApiItem = await fetch(`${API_URL}/trays?sort=${sort}&order=${order}&page=${page}&size=${size}`)
      .then(response => response.json());

    for await (const trayItem of data.items) {
      const tray = await getTrayById(trayItem.id);
      trayList.push(tray);
    }

    const trayApiData = {
      trays: trayList,
      pages: data.pages
    }

    return trayApiData;
  } catch (e: any) {
    console.log("Error trayList: " + e.message);
    return {
      trays: [],
      pages: 0
    };
  }
}

export const getTrayById = async (id: string): Promise<Tray> => {
  try {
    const tray = await fetch(`${API_URL}/trays/${id}`).then(response => response.json());
    return tray;
  } catch (e: any) {
    console.log("Error getting tray by id: " + e.message);
    return {} as Tray;
  }
}

export const searchTraysFromApi = async (search: string): Promise<SearchItem[]> => {
  try {
    if (!search) return [];
    const trays = await fetch(`${API_URL}/search/trays?name=${search}`).then(response => response.json());
    if (!trays) return [];

    const slicedTrays = trays.slice(0, 5);
    
    const searchItems: SearchItem[] = slicedTrays.map((tray: SearchItem ) => {
      return {
        id: tray.id,
        name: tray.name,
        category: "trays"
      }
    });

    return searchItems;
  } catch (e: any) {
    console.log("Error search tray: " + e.message);
    return [];
  }
}
