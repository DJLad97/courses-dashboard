export type ApiResponse<T> = {
    success: boolean;
    errors: [],
    courses: {
        current_page: number;
        data: Array<T>
        last_page: number;
    },
}

export type FilteredCoursesRequest = {
    categories: Array<string>;
    locations: Array<string>;
}

export type Course = CommonData & {
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

export type CommonData = {
    id: number;
    name: string;
    slug: string;
}

export type Category = CommonData & {
    description: string;
    icon: string;
}

export type Location = CommonData;