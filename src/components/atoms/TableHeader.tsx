type Props = {
    children: string | number;
}
function TableHeader ({ children }: Props) {
    return (
        <th className="text-left pt-10 px-10">{children}</th>
    )
}

export default TableHeader;