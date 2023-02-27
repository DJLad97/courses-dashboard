import IconText from "$molecules/IconText";
import user from "$assets/icons/user.png"
import exit from "$assets/icons/exit.png"

function NavbarUserActions () {
    return (
        <>
            <div className="flex text-neutral-600 mr-7">
                <IconText text="My Account" iconSrc={user} iconAltText="user-icon"/>
            </div>
            <div className="flex text-neutral-600">
                <IconText text="Logout" iconSrc={exit} iconAltText="exit-icon"/>
            </div>
        </>
    )
}

export default NavbarUserActions;