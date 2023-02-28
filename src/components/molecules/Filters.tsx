import FilterPill from "$atoms/FilterPill";
import FilterTypes from "$atoms/FilterTypes";
import { Category, FilteredCoursesRequest, Location } from "$types/Courses";
import { useEffect, useState } from "react";

type Props = {
    categories: Array<Category>;
    locations: Array<Location>;
    searchWithFilters: (data: FilteredCoursesRequest) => void;
}

enum FilterType {
    CATEGORY = 'category',
    LOCATION = 'location'
}

function Filters ({ categories, locations, searchWithFilters }: Props) {
    const [activeCategories, setActiveCategories] = useState<Array<number>>([])
    const [activeLocations, setActiveLocations] = useState<Array<number>>([])
    const [activeFilterType, setActiveFilterType] = useState<FilterType>(FilterType.CATEGORY)
    const [requestData, setRequestData] = useState<FilteredCoursesRequest>({ categories: [], locations: []})

    useEffect(() => {
        buildReqestData();

    }, [activeCategories, activeLocations])

    useEffect(() => {
        /*
         * API only accepts filters if there's a location
         * so only perform request if we have a location selected
         */
        // if (requestData.locations.length > 0) {
        searchWithFilters(requestData);
        // }
    }, [requestData])

    const buildCategories = () => {
        return categories.map((category) => {
            return (
                <div onClick={() => toggleFilterPill(activeCategories, category.id, FilterType.CATEGORY)} key={category.id}>
                    <FilterPill text={category.name} active={activeCategories.includes(category.id)} />
                </div>
            )
        })
    }

    const buildLocations = () => {
        return locations.map((location) => {
            return (
                <div onClick={() => toggleFilterPill(activeLocations, location.id, FilterType.LOCATION)} key={location.id}>
                    <FilterPill text={location.name} active={activeLocations.includes(location.id)} />
                </div>
            )
        })
    }

    const toggleFilterPill = (filterArray: Array<number>, selected: number, type: string) => {
        const selectedFilter = filterArray.find(id => id === selected);

        if (selectedFilter) {
            const newFilterArray = filterArray.filter((val) => val !== selectedFilter);
            (type === FilterType.CATEGORY) ? setActiveCategories(newFilterArray) : setActiveLocations(newFilterArray)
        } else {
            (type === FilterType.CATEGORY) ? setActiveCategories(filterArray.concat(selected)) : setActiveLocations(filterArray.concat(selected))
        }
    }

    const buildReqestData = () => {
        const categoriesList: Array<string> = [];
        const locationsList: Array<string> = [];

        categories.forEach((category) => {
            if (activeCategories.includes(category.id)) {
                categoriesList.push(category.slug);
            }
        });

        locations.forEach((location) => {
            if (activeLocations.includes(location.id)) {
                locationsList.push(location.slug);
            }
        });

        setRequestData({
            categories: categoriesList,
            locations: locationsList
        });
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
            <div className={`flex gap-2 ${activeFilterType !== FilterType.CATEGORY ? 'hidden' : ''}` }>
                { buildCategories() }
            </div>
            <div className={`flex gap-2 ${activeFilterType !== FilterType.LOCATION ? 'hidden' : ''}` }>
                { buildLocations() }
            </div>
        </>
    )
}

export default Filters;