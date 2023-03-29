export interface ApiItem {
  items: Item[];
  total: number;
  page: number;
  size: number;
  pages: number;
}

export interface Item {
  id: string;
  name: string;
  price: number;
}
