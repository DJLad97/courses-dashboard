import { useEffect, useState, useCallback } from 'react';
import TrainingCourses from '$templates/TrainingCourses';
import Header from '$organisms/Header';
import Sidebar from '$organisms/Sidebar';
import { getCourses } from '$lib/api';
import { Course } from '$types/Courses';

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
                {/* footer */}
            </div>
        </>
    )
}

export default Dashboard;