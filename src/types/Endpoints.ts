const baseUrl = "https://frontend-trial-api.qa.parallax.dev/api"

export const ENDPOINTS = {
    GET_COURSES: (queryParams: string = '') => `${baseUrl}/courses${queryParams}`,
    GET_CATEGORIES: `${baseUrl}/categories`,
    GET_LOCATIONS: `${baseUrl}/locations`,
}