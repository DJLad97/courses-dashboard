import FilterPill from "$atoms/FilterPill";
import FilterTypes from "$atoms/FilterTypes";

function Filters () {
    return (
        <>
            <div className="flex gap-5 mb-6">
                <FilterTypes text="Category" active={true} />
                <FilterTypes text="Location" active={false} />
            </div>
            <FilterPill text="CSS" active={true} />
            <FilterPill text="Web" active={true} />
            <FilterPill text="Miscellaneous" active={false} />

        </>
    )
}

export default Filters;