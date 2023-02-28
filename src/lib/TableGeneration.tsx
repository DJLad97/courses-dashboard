import { Course } from "$types/Courses"
import { DataType } from "$types/General"
import TableData from "$atoms/TableData";
import IconText from '$molecules/IconText';
import { IconPosition } from '$types/General';
import diagonalUp from "$assets/icons/diagonal-up.png"

export default function generateTableData (data: Array<DataType>): Array<React.ReactElement> | undefined {
    if ((data as Array<Course>)[0].course_id !== undefined) {
        return generateCourses(data as Array<Course>);
    }
}

function generateCourses (courses: Array<Course>): Array<React.ReactElement> {
    return courses.map((course) => {
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