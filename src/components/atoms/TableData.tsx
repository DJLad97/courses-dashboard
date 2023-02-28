type Props = {
    children: string | number | React.ReactElement;
    additionalClasses?: string;
}
function TableData ({ children, additionalClasses = "" }: Props) {
    return (
        <td className={`pt-6 px-10 ${additionalClasses}`}>{children}</td>
    )
}

export default TableData;