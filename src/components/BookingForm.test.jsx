import { render, screen } from "@testing-library/react";
import BookingForm from "./BookingForm";

test('Renders the BookingForm labels correctly', () => {
    render(<BookingForm availableTimes={[]} dispatch={() => {}} />);
    const dateLabel = screen.getByText("Choose date:");
    expect(dateLabel).toBeInTheDocument();
});