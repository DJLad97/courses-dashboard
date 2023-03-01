import TrainingCourses from "$templates/TrainingCourses";
import Header from "$organisms/Header";
import Sidebar from "$organisms/Sidebar";
import Footer from "$organisms/Footer";

function Dashboard () {
    return (
        <>
            <Header />
            <div className="flex">
                <Sidebar />
                <div className="bg-neutral-100 w-full">
                    <TrainingCourses />
                </div>
            </div>
            <div className="bg-neutral-200">
                <Footer />
            </div>
        </>
    )
}

export default Dashboard;