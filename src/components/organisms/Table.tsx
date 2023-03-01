import TableHeader from "$atoms/TableHeader";
import IconText from "$molecules/IconText";
import { DataType, IconPosition } from "$types/General";
import chevronDown from "$assets/icons/chevron-down.png"
import generateTableData from "$lib/TableGeneration";

type Props = {
    data: Array<DataType> | undefined;
    loadMore: () => void;
    lastPageReached: boolean;
}

function Table ({ data, loadMore, lastPageReached }: Props) {
    const generateData = () => {
        if (data !== undefined) {
            return generateTableData(data);
        }

        return (
            <div className="flex justify-center">
                <h1 className="text-primary-700">No data available</h1>
            </div>
        )
    }

    return (
        <>
            <table className="table-auto">
                <thead>
                    <tr>
                        <TableHeader>Course</TableHeader>
                        <TableHeader>ID</TableHeader>
                        <TableHeader>Price</TableHeader>
                        <TableHeader>Location</TableHeader>
                        <TableHeader>Dates</TableHeader>
                        <TableHeader>Link</TableHeader>
                    </tr>
                </thead>
                <tbody>
                    { generateData() }
                </tbody>
            </table>
            <div className="flex justify-center py-12">
                <span className="cursor-pointer flex gap-2 text-primary-800">
                    {
                        data && data.length > 0 ?
                        <>
                            { !lastPageReached ?
                                <IconText iconSrc={chevronDown} iconPosition={IconPosition.RIGHT}>
                                    <span onClick={() => loadMore()}>Load More</span>
                                </IconText> :
                                <span>End of list</span>
                            }
                        </> : <span>No data available</span>
                     }
                </span>
            </div>
        </>
    )
}

export default Table;