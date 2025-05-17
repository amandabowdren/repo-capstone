import { render, screen } from "@testing-library/react";
import BookingForm from "./BookingForm";

/* test('Renders the BookingForm labels correctly', () => {
    render(<BookingForm availableTimes={[]} dispatch={() => {}} />);
    const dateLabel = screen.getByText("Choose date:");
    expect(dateLabel).toBeInTheDocument();
}); */

const mockDispatch = jest.fn();
const mockSubmit = jest.fn();

beforeEach(() => {
    render(
        <BookingForm
            availableTimes={['17:00', '18:00']}
            dispatch={mockDispatch}
            submitForm={mockSubmit}
        />
    );
});

test('renders date input with required attribute', () => {
    const dateInput = screen.getByLabelText(/date/i);
    expect(dateInput).toBeRequired();
});

test('renders guests input with min and max attributes', () => {
    const guestsInput = screen.getByLabelText(/number of guests/i);
    expect(guestsInput).toHaveAttribute('min', '1');
    expect(guestsInput).toHaveAttribute('max', '10');
    expect(guestsInput).toBeRequired();
});

test('renders time select with required attribute', () => {
    const timeSelect = screen.getByLabelText(/time/i);
    expect(timeSelect).toBeRequired();
});

test('renders occasion select with required attribute', () => {
    const occasionSelect = screen.getByLabelText(/occasion/i);
    expect(occasionSelect).toBeRequired();
});

import userEvent from '@testing-library/user-event';

test('submit button is disabled when form is complete', async () => {
    const button = screen.getByRole('button', { name: /submit/i });
    expect(button).toBeDisabled();
});

test('submit button is enab led when form is valid', async () => {
    const user = userEvent.setup();

    await user.type(screen.getByLabelText(/date/i), '2025-06-01');
    await user.selectOptions(screen.getByLabelText(/time/i), '17:00');
    await user.clear(screen.getByLabelText(/number of guests/i));
    await user.type(screen.getByLabelText(/number of guests/i), '4');
    await user.selectOptions(screen.getByLabelText(/occasion/i), 'Birthday');

    const button = screen.getByRole('button', { name: /submit/i });
    expect(button).toBeEnabled();
});