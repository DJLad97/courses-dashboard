import Filters from '$molecules/Filters';
import { useEffect, useRef, useState } from 'react';
import { filterCourses, getCategories, getCourses, getLocations } from '$lib/api';
import { Category, Course, FilteredCoursesRequest, Location } from "$types/Courses"
import Table from '$organisms/Table';
import TableLoadingSkeleton from '$atoms/TableLoadingSkeleton';
import Icon from '$atoms/Icon';
import IconText from '$molecules/IconText';
import cog from "$assets/icons/cog.png"
import Card from '$molecules/Card';
import laptop from "$assets/icons/laptop.png"
import downloadPc from "$assets/icons/download-pc.png"
import CategoriesList from '$organisms/CategoriesList';

function TrainingCourses() {
    const [courses, setCourses] = useState<Array<Course>>([])
    const [categories, setCategories] = useState<Array<Category>>([])
    const [locations, setLocations] = useState<Array<Location>>([])
    const [loading, setLoading] = useState(false);
    const pageCount = useRef(1);

    useEffect(() => {
        getCoursesData();
        getCategoriesData();
        getLocationsData();

        return () => {
            setCourses([]);
            setCategories([]);
            setLocations([]);
        }
    }, []);

    const getCategoriesData = () => {
        getCategories()
            .then((response) => {
                if (!response.errors.length) {
                    setCategories(categories.concat(response.courses.data));
                }
            });
    }

    const getLocationsData = () => {
        getLocations()
            .then((response) => {
                if (!response.errors.length) {
                    setLocations(locations.concat(response.courses.data));
                }
            });
    }

    const getCoursesData = (queryParams: string = '') => {
        setLoading(true);

        getCourses(queryParams)
            .then((response) => {
                if (!response.errors.length) {
                    setCourses(courses.concat(response.courses.data));
                }

                setLoading(false);
            });
    }

    const loadMore = () => {
        pageCount.current++;
        getCoursesData(`?page=${pageCount.current}`);
    }

    const searchWithFilters = async (data: FilteredCoursesRequest) => {
        const response = filterCourses(data);
        console.log(response);
        console.log(data)
    }

    return (
        <>
            <div className="mx-10 mt-12">
                <h1 className="text-neutral-900 text-5xl mb-8">Training Courses</h1>
                <div className="mb-10">
                    <Filters categories={categories} locations={locations} searchWithFilters={searchWithFilters }/>
                </div>
                { !loading ?
                    <div className="bg-white rounded-md max-w-fit">
                        <Table data={courses} loadMore={() => loadMore()}/>
                    </div> : <TableLoadingSkeleton />
                }
                <div className="mt-20 mb-96">
                    <CategoriesList categories={categories} />
                </div>
            </div>
        </>
    )
}

export default TrainingCourses;