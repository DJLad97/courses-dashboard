import searchIcon from '@assets/icons/search.png'
import logo from '@assets/icons/Parallax_logo.png'
import NavbarUserActions from '@molecules/NavbarUserActions';
import NavbarSearch from '@molecules/NavbarSearch';

function Header () {
    return (
        <div className="bg-white flex justify-between py-4 px-6 shadow-xl">
            <div>
                <img src={logo} alt="" />
            </div>
            <div>
                <NavbarSearch />
            </div>
            <div className="flex self-center">
                <NavbarUserActions />
            </div>
        </div>
    )
}

export default Header;