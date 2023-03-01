import Icon from "$atoms/Icon";
import IconText from "$molecules/IconText";
import navRight from "$assets/icons/navigation-right-circle.png"

type Props = {
    icon: string;
    title: string;
    description: string;
}

function Card ({ icon, title, description }: Props) {
    return (
        <div className="flex flex-col bg-white rounded shadow-lg px-4 mr-10">
            <div className="mt-7">
                <Icon src={icon} />
            </div>
            <h2 className="text-xl font-semibold mt-4">{ title }</h2>
            <p className="mt-2 mb-6 min-w-[258px] max-w-[258px]">
                { description }
            </p>
            <div className="flex mt-auto mb-6">
                <IconText iconSrc={navRight}>
                    View
                </IconText>
            </div>
        </div>
    )
}

export default Card;