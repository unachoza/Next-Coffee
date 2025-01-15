import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Page from "../page";

describe("Page", () => {
	it("renders a heading", () => {
		render(<Page />);

		const heading = screen.getByRole("heading", { level: 1 });

		expect(heading).toBeInTheDocument();
	});

	it("renders correct text in heading", () => {
		render(<Page />);
		const message = screen.queryByText(/Coffee Drinker Extraordinaire/);
		expect(message).toBeInTheDocument();
	});
});
