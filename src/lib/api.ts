import axios, { Axios, AxiosError } from "axios";
import { ApiResponse, FilteredCoursesRequest, Course, Category, Location } from '$types/Courses';
import { ENDPOINTS } from '$types/Endpoints';
import { filterDuplicates } from '$lib/helpers';

axios.defaults.headers["Access-Control-Allow-Origin"] = "*";
axios.defaults.headers["Content-Type"] = "application/json";
axios.defaults.headers["X-Requested-With"] = "XMLHttpRequest"

export async function getCourses (queryParams: string = '') {
    try {
        const response = await axios.get<ApiResponse<Course>>(ENDPOINTS.GET_COURSES(queryParams));

        return response.data;
    } catch (e) {
        if (e instanceof AxiosError) {
            throw new Error(e.message);
        }
    }
}

export async function getCategories() {
    try {
        const response = await axios.get<ApiResponse<Category>>(ENDPOINTS.GET_CATEGORIES);
        // const uniqueCategories = response.data.courses.data.reduce((acc: Array<Category>, current) => {
        //     const duplicates = acc.filter(course => course.slug === current.slug);
        //     if (duplicates.length === 0) {
        //         acc.push(current);
        //     }
        //     return acc
        // }, []);
        response.data.courses.data = filterDuplicates(response.data.courses.data);
        return response.data;
    } catch (e) {
        if (e instanceof AxiosError) {
            throw new Error(e.message);
        }
    }
}

export async function getLocations() {
    try {
        const response = await axios.get<ApiResponse<Location>>(ENDPOINTS.GET_LOCATIONS);
        response.data.courses.data = filterDuplicates(response.data.courses.data);

        return response.data;
    } catch (e) {
        if (e instanceof AxiosError) {
            throw new Error(e.message);
        }
    }
}

export async function filterCourses (requestData: FilteredCoursesRequest, queryParams: string = '') {
    try {
        const response = await axios.post<ApiResponse<Course>>(ENDPOINTS.GET_COURSES(queryParams), {
             ...requestData,
        });

        return response.data;
    } catch (e) {
        if (e instanceof AxiosError) {
            throw new Error(e.message);
        }
    }

}