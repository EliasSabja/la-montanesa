import type { Course } from "$lib/schemas/course.schema";
import type { ApiItem } from "../schemas/item.schema";
import type { SearchItem } from "../schemas/search.schema";
import { API_URL } from '$lib/constants';

export interface CourseApiData {
  courses: Course[];
  pages: number;
}

export const getCoursesFromApi = async (
  sort: string,
  order: string,
  page: number,
  size: number
): Promise<CourseApiData> => {
  const courseList: Course[] = [];

  try {
    const data: ApiItem = await fetch(`${API_URL}/courses?sort=${sort}&order=${order}&page=${page}&size=${size}`)
      .then(response => response.json());

    for await (const courseItem of data.items) {
      const course = await getCourseById(courseItem.id);
      courseList.push(course);
    }

    const courseApiData = {
      courses: courseList,
      pages: data.pages
    }

    return courseApiData;
  } catch (e: any) {
    console.log("Error courseList: " + e.message);
    return {
      courses: [],
      pages: 0
    };
  }
}

export const getCourseById = async (id: string): Promise<Course> => {
  try {
    const course = await fetch(`${API_URL}/courses/${id}`).then(response => response.json());
    return course;
  } catch (e: any) {
    console.log("Error getting course by id: " + e.message);
    return {} as Course;
  }
}

export const searchCoursesFromApi = async (search: string): Promise<SearchItem[]> => {
  try {
    if (!search) return [];
    const courses = await fetch(`${API_URL}/search/courses?name=${search}`).then(response => response.json());
    if (!courses) return [];

    const slicedCourses = courses.slice(0, 5);
    
    const searchItems: SearchItem[] = slicedCourses.map((course: SearchItem ) => {
      return {
        id: course.id,
        name: course.name,
        category: "courses"
      }
    });

    return searchItems;
  } catch (e: any) {
    console.log("Error search course: " + e.message);
    return [];
  }
}
