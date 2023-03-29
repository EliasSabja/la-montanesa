import type { TraySearchItem } from "$lib/schemas/tray.schema";
import { API_URL } from '$lib/constants';

export const searchTraysApiRequest = async(name: string) => {
  const traySearchList: TraySearchItem[] = await fetch(`${API_URL}/search/trays?name=${name}`)
    .then(response => response.json());

  return traySearchList;
}
