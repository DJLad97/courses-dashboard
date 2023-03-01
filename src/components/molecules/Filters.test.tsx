import { render, screen } from "@testing-library/react"
import { default as userEvent } from "@testing-library/user-event"
import Filters from "$molecules/Filters"
import { categories, locations } from "$test/mocks";

describe("Filters", async () => {
    test("should render the category filters", async () => {
        render(
            <Filters
                categories={categories}
                locations={locations}
                buildReqestData={() => {}}
            />,
        );

        expect(await screen.getByTestId("category-filter")).not.toHaveClass('hidden');
        expect(await screen.getByTestId("location-filter")).toHaveClass('hidden');
    });

    test("when locations clicked, then the location filters are visible", async () => {
        render(
            <Filters
                categories={categories}
                locations={locations}
                buildReqestData={() => {}}
            />,
        )

        await userEvent.click(screen.getByText("Location"));

        expect(await screen.getByTestId("category-filter")).toHaveClass('hidden');
        expect(await screen.getByTestId("location-filter")).not.toHaveClass('hidden');
    });
});