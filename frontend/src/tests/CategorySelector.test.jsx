import { describe, test, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";

import { CategorySelector } from "../components/CategorySelector";

describe("CategorySelector", () => {

    // TEST 1: Check that the categories are displayed
    // example test: not very useful as I always have npm run dev running so can check visual changes myself
    test("displays the available categories", () => {
	// render the component in its entirety using jsdom
        render(<CategorySelector />);

        expect(screen.getByText("Emacs")).toBeTruthy();
        expect(screen.getByText("JavaScript")).toBeTruthy();
    });


    // TEST 2: Check that clicking a category calls onSelect
    test("calls onSelect when a category is clicked", () => {

        render(<CategorySelector onSelect={onSelect} />);

        fireEvent.click(screen.getByText("Emacs"));  // fireEvent  -> simulates clicking an element

        expect(onSelect).toHaveBeenCalledTimes(1); // toHaveBeenCalledTimes() -> checks this function called once
    });


    // TEST 3: Check that the correct category is passed to onSelect
    test("passes the selected category to onSelect", () => {

        render(<CategorySelector onSelect={onSelect} />);

        fireEvent.click(screen.getByText("Emacs"));

	// toHaveBeenCalledWith() -> check which arguments were passed
	// objectContaining() -> check that an object contains certain properties
        expect(onSelect).toHaveBeenCalledWith(   
            expect.objectContaining({ name: "Emacs" })
        );
    });

});
