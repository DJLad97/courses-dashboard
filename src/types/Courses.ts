export interface Course {
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