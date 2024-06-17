import React from "react";
import { render, screen, fireEvent } from '@testing-library/react'
import Button from "./button";

describe('button', () => {
    test('render the button with text', () => {
        render(<Button>Click me</Button>);
        const buttonElement = screen.getByText('Click me');
        expect(buttonElement).toBeInTheDocument();
    })

    test('handle click event', () => {
        const handleClick = jest.fn()
        render(<Button onClick={handleClick}>Click Me</Button>);
        const buttonElement = screen.getByText('Click Me');
        fireEvent.click(buttonElement);
        expect(handleClick).toHaveBeenCalledTimes(1);
    });
});