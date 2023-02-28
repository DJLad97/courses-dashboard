import IconText from "$molecules/IconText";
import user from "$assets/icons/user.png"
import exit from "$assets/icons/exit.png"

function NavbarUserActions () {
    return (
        <>
            <div className="flex text-neutral-600 mr-7">
                <IconText iconSrc={user} iconAltText="user-icon">
                    My Account
                </IconText>
            </div>
            <div className="flex text-neutral-600">
                <IconText iconSrc={exit} iconAltText="exit-icon">
                    Logout
                </IconText>
            </div>
        </>
    )
}

export default NavbarUserActions;