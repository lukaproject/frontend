
import { render, screen } from "@testing-library/react";
import LukaBreadcrumb from "./Breadcrumb";

test("test luka bread crumb", () => {
    render(<LukaBreadcrumb items={
        [
            <a href="/1" data-testid="tag1">tag1</a>,
            <a href="/2" data-testid="tag2">tag2</a>,
            <div data-testid="tag3">tag3</div>,
        ]
    }></LukaBreadcrumb>);
    for (let testId of ['tag1', 'tag2', 'tag3']) {
        expect(screen.getByTestId(testId)).toBeInTheDocument();
    }
});