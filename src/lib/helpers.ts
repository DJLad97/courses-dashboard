import { CommonData } from './../types/Courses';
import { format } from "date-fns";

export function formatDate (date: string) {
    try {
        return format(new Date(date), 'MMM d y')
    } catch (e) {
        return 'Invalid Date';
    }
}

export function filterDuplicates <T extends CommonData>(array: Array<T>) {
    return array.reduce((acc: Array<T>, current) => {
        const duplicates = acc.filter(item => item.slug === current.slug);
        if (duplicates.length === 0) {
            acc.push(current);
        }
        return acc
    }, []);
}
