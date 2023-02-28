type Props = {
    src: string;
    width?: number;
    height?: number;
    alt?: string;
    classes?: string
}

function Icon ({src, alt = "", classes = ""}: Props) {
    return (
        <img src={src} alt={alt} className={classes} />
    )
}

export default Icon;