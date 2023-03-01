import logo from '$assets/icons/Parallax_logo.png'
import NavbarUserActions from '$molecules/NavbarUserActions';
import NavbarSearch from '$molecules/NavbarSearch';

function Footer () {
    return (
        <div className="flex gap-7 bg-neutral-100 justify-end pb-7 pr-10">
            <span className="text-neutral-900 underline">Terms and conditions</span>
            <span className="text-neutral-900 underline">Privacy policy</span>
        </div>
    )
}

export default Footer;