import type { Course } from "./course.schema";

export interface Tray {
  id: string;
  name: string;
  description: string;
  expiration: number;
  price: number;
  size: number;
  courses: Course[];
}

export interface TraySearchItem {
  id: string;
  name: string;
  price: number;
}
