import axios from "axios";
import { ApiResponse, FilteredCoursesRequest, Course, Category, Location } from '$types/Courses';
import { ENDPOINTS } from '$types/Endpoints';

// axios.defaults.headers["Access-Control-Allow-Origin"] = "*";
// axios.defaults.headers["Content-Type"] = "application/json";
// axios.defaults.headers["Accept"] = "*/*";
// axios.defaults.headers["X-Requested-With"] = "XMLHttpRequest"

export async function getCourses (queryParams: string = '') {
    const response = await axios.get<ApiResponse<Course>>(ENDPOINTS.GET_COURSES(queryParams));

    return response.data;
}

export async function getCategories() {
    const response = await axios.get<ApiResponse<Category>>(ENDPOINTS.GET_CATEGORIES);

    return response.data;
}

export async function getLocations() {
    const response = await axios.get<ApiResponse<Location>>(ENDPOINTS.GET_LOCATIONS);

    return response.data;
}

export async function filterCourses (requestData: FilteredCoursesRequest) {
    const response = await axios.post<ApiResponse<Course>>(ENDPOINTS.GET_COURSES(), {
         requestData,
    }, {
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json",
            "X-Requested-With": "XMLHttpRequest",
            "Content-Encoding": "gzip",
            "Cache-Control": "no-cache, private",
            "Pod": "frontend-trial-api-master-33-878b64f6c-trb7t",
            "Server": "openresty",
            "Vary": "Accept-Encoding",
            "X-Ratelimit-Limit": 60,
            "X-Ratelimit-Remaining": 59,
            "Accept": "*/*",
        }
    });

    return response.data;
}