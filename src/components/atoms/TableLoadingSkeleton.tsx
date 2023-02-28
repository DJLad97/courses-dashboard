function TableLoadingSkeleton () {
    return (
        <div className="bg-white rounded-md py-12 px-10 animate-pulse">
            <div className="h-4 bg-neutral-200 mt-3 mb-6 rounded"></div>
            <div className="h-4 bg-neutral-300 mb-6 rounded"></div>
            <div className="h-4 bg-neutral-200 mb-6 rounded"></div>
            <div className="h-4 bg-neutral-300 mb-6 rounded"></div>
            <div className="h-4 bg-neutral-200 mb-6 rounded"></div>
        </div>
    )
}

export default TableLoadingSkeleton;