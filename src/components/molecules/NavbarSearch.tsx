import searchIcon from '$assets/icons/search.png'

function NavbarSearch () {
    return (
        <div className="flex">
            <div className="relative">
                <input type="text" className="py-4 pl-4 pr-20 rounded z-0 border-neutral-200 border focus:outline-none" placeholder="Search by keyword..." />
                <div className="absolute top-1 right-1">
                    <button className="bg-neutral-900 w-12 h-12 rounded self-center flex">
                        <img src={searchIcon} className="self-center m-auto" alt="search-icon" />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default NavbarSearch;