import Icon from "@atoms/Icon";

interface Props {
    text: string | number;
    iconSrc: string;
    iconAltText?: string;
}

function IconText ({ text, iconSrc, iconAltText = ""}: Props) {
    return (
        <>
            <Icon src={iconSrc} alt={iconAltText} classes="self-center mr-2.5"/>
            <span>{ text }</span>
        </>
    )
}

export default IconText;