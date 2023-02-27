import TrainingCourses from '@templates/TrainingCourses';
import Header from '@organisms/Header';
import Sidebar from '@organisms/Sidebar';

function Dashboard () {
    return (
        <>
            <Header />
            <div className="flex">
                <Sidebar />
                <TrainingCourses />
            </div>
        </>
    )
}

export default Dashboard;