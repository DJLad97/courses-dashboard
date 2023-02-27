interface Props {
    text: string;
    active: boolean;
}

import Filters from '$molecules/Filters';

function TrainingCourses () {
    return (
        <>
            <div className="ml-10 mt-12">
                <h1 className="text-neutral-900 text-5xl mb-8">Training Courses</h1>
                <Filters />
            </div>
        </>
    )
}

export default TrainingCourses;