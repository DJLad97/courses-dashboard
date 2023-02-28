import Filters from '$molecules/Filters';
import TableHeader from "$atoms/TableHeader";
import TableData from "$atoms/TableData";
import { Course } from "$types/Courses"
import IconText from '$molecules/IconText';
import { IconPosition } from '$types/General';
import diagonalUp from "$assets/icons/diagonal-up.png"
import chevronDown from "$assets/icons/chevron-down.png"
import Table from '$organisms/Table';

function TrainingCourses() {
    const data: Array<Course> = [
        {
            "id": 1,
            "name": "<p>Introduction to Parallax</p>",
            "slug": "par001",
            "course_id": "PAR001",
            "location": "leeds",
            "category": "css",
            "price": 2540,
            "link": "/courses/intro-to-parallax",
            "starts_at": "2022-03-14T12:00:57+00:00",
            "ends_at": "2022-03-14T16:00:57+00:00",
            "created_at": null,
            "updated_at": null
        },
        {
            "id": 2,
            "name": "<p>Introduction to Parallax</p>",
            "slug": "par001",
            "course_id": "PAR001",
            "location": "portsmouth",
            "category": "css",
            "price": 2540,
            "link": "/courses/intro-to-parallax",
            "starts_at": "2022-03-18T09:12:57+00:00",
            "ends_at": "2022-03-18T16:12:57+00:00",
            "created_at": null,
            "updated_at": null
        },
        {
            "id": 3,
            "name": "<p>Advanced CSS</p>",
            "slug": "css001",
            "course_id": "CSS001",
            "location": "portsmouth",
            "category": "web",
            "price": 3000,
            "link": "/courses/intro-to-parallax",
            "starts_at": "2022-06-14T13:12:57+00:00",
            "ends_at": "2022-06-14T16:12:57+00:00",
            "created_at": null,
            "updated_at": null
        },
        {
            "id": 4,
            "name": "<p>Advanced Figma principles with Liam</p>",
            "slug": "fig001",
            "course_id": "FIG001",
            "location": "leeds",
            "category": "css",
            "price": 10000,
            "link": "/courses/intro-to-parallax",
            "starts_at": "2022-07-14T12:12:57+00:00",
            "ends_at": "2022-07-14T16:12:57+00:00",
            "created_at": null,
            "updated_at": null
        },
        {
            "id": 5,
            "name": "<p>The best hack day projects</p>",
            "slug": "hac001",
            "course_id": "HAC001",
            "location": "portsmouth",
            "category": "web",
            "price": 300,
            "link": "/courses/intro-to-parallax",
            "starts_at": "2022-03-14T16:12:57+00:00",
            "ends_at": "2022-03-14T16:12:57+00:00",
            "created_at": null,
            "updated_at": null
        }
    ];

    const generateTableData = () => {
        return data.map((course) => {
            return (
                <tr>
                    <TableData additionalClasses="font-semibold">{ new DOMParser().parseFromString(course.name, "text/html").body.textContent || ""}</TableData>
                    <TableData>{ course.id }</TableData>
                    <TableData>{ course.price }</TableData>
                    <TableData>{ course.location }</TableData>
                    <TableData>{ `${course.starts_at} - ${course.ends_at}` }</TableData>
                    <TableData>
                        <a className="flex gap-2" href={course.link}>
                            <IconText iconSrc={diagonalUp} iconPosition={IconPosition.RIGHT}>
                                Register
                            </IconText>
                        </a>
                    </TableData>
                </tr>
            )
        })
    }

    return (
        <>
            <div className="mx-10 mt-12">
                <h1 className="text-neutral-900 text-5xl mb-8">Training Courses</h1>
                <div className="mb-10">
                    <Filters />
                </div>
                <div className="bg-white rounded-md max-w-fit">
                    <Table data={data} />
                </div>
            </div>
        </>
    )
}

export default TrainingCourses;