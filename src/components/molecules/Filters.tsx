import { useRef, useState } from "react";
import FilterPill from "$atoms/FilterPill";
import FilterTypes from "$atoms/FilterTypes";
import { useEffectAfterMount } from "$lib/hooks";
import { Category, Location } from "$types/Courses";

type Props = {
    categories: Array<Category>;
    locations: Array<Location>;
    buildReqestData: (activeCategories: Array<number>, activeLocations: Array<number>) => void;
}

enum FilterType {
    CATEGORY = "category",
    LOCATION = "location"
}

function Filters ({ categories, locations, buildReqestData }: Props) {
    const [activeCategories, setActiveCategories] = useState<Array<number>>([])
    const [activeLocations, setActiveLocations] = useState<Array<number>>([])
    const [activeFilterType, setActiveFilterType] = useState<FilterType>(FilterType.CATEGORY)
    const filtersClicked = useRef(false);

    useEffectAfterMount(() => {
        buildReqestData(activeCategories, activeLocations);
    }, [activeCategories, activeLocations])

    const buildCategories = () => {
        return categories.map((category) => {
            return (
                <div onClick={() => toggleFilterPill(activeCategories, category.id, FilterType.CATEGORY)} key={`${category.id}-category`}>
                    <FilterPill text={category.name} active={activeCategories.includes(category.id)} />
                </div>
            )
        })
    }

    const buildLocations = () => {
        return locations.map((location) => {
            return (
                <div onClick={() => toggleFilterPill(activeLocations, location.id, FilterType.LOCATION)} key={`${location.id}-location`}>
                    <FilterPill text={location.name} active={activeLocations.includes(location.id)} />
                </div>
            )
        })
    }

    const toggleFilterPill = (filterArray: Array<number>, selected: number, type: string) => {
        filtersClicked.current = true;
        const selectedFilter = filterArray.find(id => id === selected);

        if (selectedFilter) {
            const newFilterArray = filterArray.filter((val) => val !== selectedFilter);
            (type === FilterType.CATEGORY) ? setActiveCategories(newFilterArray) : setActiveLocations(newFilterArray)
        } else {
            (type === FilterType.CATEGORY) ? setActiveCategories(filterArray.concat(selected)) : setActiveLocations(filterArray.concat(selected))
        }
    }

    return (
        <>
            <div className="flex gap-5 mb-6">
                <div onClick={() => setActiveFilterType(FilterType.CATEGORY)}>
                    <FilterTypes text="Category" active={activeFilterType === FilterType.CATEGORY} />
                </div>
                <div onClick={() => setActiveFilterType(FilterType.LOCATION)}>
                    <FilterTypes text="Location" active={activeFilterType === FilterType.LOCATION} />
                </div>
            </div>
            <div className={`flex gap-2 ${activeFilterType !== FilterType.CATEGORY ? "hidden" : ""}` } data-testid="category-filter">
                { buildCategories() }
            </div>
            <div className={`flex gap-2 ${activeFilterType !== FilterType.LOCATION ? "hidden" : ""}` } data-testid="location-filter">
                { buildLocations() }
            </div>
        </>
    )
}

export default Filters;