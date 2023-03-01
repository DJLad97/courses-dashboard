import { format } from "date-fns";

export function formatDate (date: string) {
    try {
        return format(new Date(date), 'MMM d y')
    } catch (e) {
        return 'Invalid Date';
    }
}
