import SidebarNavItems from '../molecules/SidebarNavItems';

function Sidebar () {
    return (
        <div className="bg-neutral-900 text-neutral-100 float-left justify-between pt-4 pb-96 pr-24 font-semibold">
            <SidebarNavItems />
        </div>
    )
}

export default Sidebar;