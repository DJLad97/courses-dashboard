export type ApiResponse<T> = {
    success: boolean;
    errors: [],
    courses: {
        current_page: number;
        data: Array<T>
    }
}

export type FilteredCoursesRequest = {
    categories: Array<string>;
    locations: Array<string>;
}

export type Course = {
    id: number;
    name: string;
    slug: string;
    course_id: string;
    location: string;
    category: string;
    price: number;
    link: string;
    starts_at: string;
    ends_at: string;
    created_at: string | null;
    updated_at: string | null;
}

type FilteredData = {
    id: number;
    name: string;
    slug: string;

}

export type Category = FilteredData & {
    description: string;
    icon: string;
}

export type Location = FilteredData;