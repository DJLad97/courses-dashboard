import Icon from "$atoms/Icon";
import { IconPosition } from "$types/General";
type Props = {
    children: string | number | React.ReactElement;
    iconSrc: string;
    iconAltText?: string;
    iconPosition?: IconPosition;
}

function IconText ({ children, iconSrc, iconAltText = "", iconPosition = IconPosition.LEFT}: Props) {
    return (
        <>
            { iconPosition === IconPosition.LEFT ? <Icon src={iconSrc} alt={iconAltText} classes="self-center mr-2.5"/> : null }
            { children }
            { iconPosition === IconPosition.RIGHT ? <Icon src={iconSrc} alt={iconAltText} classes="self-center mr-2.5"/> : null }
        </>
    )
}

export default IconText;