import { Category } from "$types/Courses"
import cog from "$assets/icons/cog.png"
import Card from '$molecules/Card';

type Props = {
    categories: Array<Category>
}

function CategoriesList({ categories }: Props) {
    return (
        <>
            <h1 className="font-bold text-2xl mb-6">Courses</h1>
            <div className="flex">
                {
                    categories.map((category) => (
                        <Card icon={cog} title={category.name} description={category.description} />
                    ))
                }
            </div>
        </>
    )
}

export default CategoriesList;