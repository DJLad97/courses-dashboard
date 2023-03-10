import { FilterProps } from "$types/Filters";

function FilterPill ({ text, active = false }: FilterProps) {
    return (
        <button className={`
            ${active ? "bg-primary-700 text-primary-100" : "bg-primary-200 text-neutral-900"}
            rounded-3xl
            py-1 px-3
            cursor-pointer
            select-none
        `}>
            { text }
        </button>
    )
}

export default FilterPill;