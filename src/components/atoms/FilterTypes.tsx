import { FilterProps } from "$types/Filters";

function FilterTypes ({ text, active = false }: FilterProps) {
    return (
        <div className="min-w-[164px]">
            <div className={`
                ${active ?
                    'text-neutral-900 ' :
                    'text-neutral-300 ' }
                flex flex-col gap-y-1
                border-spacing-1.5
                `}
            >
                { text }
                <span className={`
                    ${active ?
                    'border-b-2 border-b-neutral-900' :
                    'border-b-2 border-b-neutral-300' }
                min-w-[164px]`} />
            </div>
        </div>
    )
}

export default FilterTypes;