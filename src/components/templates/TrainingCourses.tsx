import Filters from '$molecules/Filters';
import { useEffect, useRef, useState } from 'react';
import { filterCourses, getCategories, getCourses, getLocations } from '$lib/api';
import { Category, Course, FilteredCoursesRequest, Location } from "$types/Courses"
import Table from '$organisms/Table';
import TableLoadingSkeleton from '$atoms/TableLoadingSkeleton';
import CategoriesList from '$organisms/CategoriesList';
import { useEffectAfterMount } from '$lib/hooks';

function TrainingCourses() {
    const [courses, setCourses] = useState<Array<Course>>([])
    const [categories, setCategories] = useState<Array<Category>>([])
    const [locations, setLocations] = useState<Array<Location>>([])
    const [loading, setLoading] = useState(false);
    const [requestData, setRequestData] = useState<FilteredCoursesRequest>({ categories: [], locations: []})

    const error = useRef(false);
    const currentPage = useRef(1);
    const lastPageReached = useRef(false);

    useEffect(() => {
        getCategoriesData();
        getLocationsData();
        getCoursesData();

        return () => {
            setCourses([]);
            setCategories([]);
            setLocations([]);
        }
    }, []);

    useEffectAfterMount(() => {
        if ((requestData.categories.length > 0 || requestData.locations.length > 0)) {
            searchWithFilters();
        } else {
            getCoursesData();
        }
    }, [requestData])

    const getCategoriesData = () => {
        getCategories()
        .then((response) => {
                if (response && !response.errors.length) {
                    setCategories(categories.concat(response.courses.data));
                }
            })
            .catch((e) => {
                setLoading(false);
                error.current = true;
            })
    }

    const getLocationsData = () => {
        getLocations()
            .then((response) => {
                if (response && !response.errors.length) {
                    setLocations(locations.concat(response.courses.data));
                }
            })
            .catch((e) => {
                setLoading(false);
                error.current = true;
            })
    }

    const getCoursesData = (queryParams: string = '') => {
        setLoading(true);

        getCourses(queryParams)
            .then((response) => {
                if (response && !response.errors.length) {
                    setCourseData(courses.concat(response.courses.data), response.courses.last_page)
                }

                setLoading(false);
            })
            .catch((e) => {
                setLoading(false);
                error.current = true;
            })
    }

    const setCourseData = (courses: Array<Course>, lastPage: number) => {
        setLastPagedReached(lastPage);
        setCourses(courses);
    }

    const loadMore = () => {
        if (lastPageReached.current) {
            return;
        }

        currentPage.current++;
        const queryParams = `?page=${currentPage.current}`;

        if (canPerformFilteredSearch()) {
            searchWithFilters(queryParams, true);
        } else {
            getCoursesData(queryParams);
        }
    }

    const searchWithFilters = async (queryParams: string = '', loadMore: boolean = false) => {
        console.log(requestData);
        setLoading(true);

        try {
            const response = await filterCourses(requestData, queryParams);
            if (response && !response.errors.length) {
                setLastPagedReached(response.courses.last_page);

                (loadMore) ?
                    setCourseData(courses.concat(response.courses.data), response.courses.last_page) :
                    setCourseData(response.courses.data, response.courses.last_page)

            }
        } catch (e) {
            setLoading(false);
            error.current = true;
        }

        setLoading(false);
    }

    const canPerformFilteredSearch = () => {
        return requestData.locations.length > 0 || requestData.categories.length > 0;
    }

    const buildReqestData = (activeCategories: Array<number>, activeLocations: Array<number>) => {
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

    const setLastPagedReached = (lastPage: number) => {
        lastPageReached.current = lastPage === currentPage.current;
    }

    return (
        <>
            <div className="mx-10 mt-12">
                <h1 className="text-neutral-900 text-5xl mb-8">Training Courses</h1>
                <div className="mb-10">
                    <Filters
                        categories={categories}
                        locations={locations}
                        buildReqestData={buildReqestData}
                    />
                </div>
                { !error.current ?
                    <>
                        { !loading ?
                            <div className="bg-white rounded-md max-w-fit">
                                <Table data={courses} loadMore={() => loadMore()} lastPageReached={lastPageReached.current} />
                            </div> : <TableLoadingSkeleton />
                        }
                    </> :
                    <div>
                        <h1 className="text-2xl text-primary-700">Something went wrong! Please try again</h1>
                    </div>
                }
                <div className="mt-20 mb-96">
                    <CategoriesList categories={categories} />
                </div>
            </div>
        </>
    )
}

export default TrainingCourses;