import IconText from "$molecules/IconText";
import dashboard from "$assets/icons/dashboard.png"
import courses from "$assets/icons/SupervisedUserCircle.png"
import library from "$assets/icons/library.png"
import info from "$assets/icons/info.png"

function SidebarNavItems () {
    return (
        <ul>
            <li className="flex gap-5 my-4 ml-10 hover:text-primary-300 cursor-pointer">
                <IconText iconSrc={dashboard}>
                    Dashboard
                </IconText>
            </li>
            <li className="mt-10 mb-4 ml-10">
                Training
            </li>
            <li className="flex gap-5 mb-4 border-l-2 border-primary-300 rounded-r hover:text-primary-300 cursor-pointer">
                <div className="ml-10 gap-4 flex">
                    <IconText iconSrc={courses}>
                        Courses
                    </IconText>
                </div>
            </li>
            <li className="flex gap-5 mb-4 ml-10 hover:text-primary-300 cursor-pointer">
                <IconText iconSrc={library}>
                    Library
                </IconText>
            </li>
            <li className="pt-10 mb-4 ml-10">
                Need Help?
            </li>
            <li className="flex gap-5 my-4 ml-10 hover:text-primary-300 cursor-pointer">
                <IconText iconSrc={info}>
                    Support
                </IconText>
            </li>
        </ul>
    )
}

export default SidebarNavItems;