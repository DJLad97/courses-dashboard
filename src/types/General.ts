import { Course } from "$types/Courses";

export enum IconPosition {
    LEFT = "left",
    RIGHT = "right"
}

/*
 * This is type is for table generation and my idea
 * for this is in a real-world scenario it would consist of multiple
 * types of data that is displayed in other table
 * (This is type is narrowed down in the TableGeneration component)
 * e.g DataType = Course | Users | Library
 */
export type DataType = Course;