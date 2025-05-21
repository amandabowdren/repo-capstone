import { useState, useEffect } from 'react';

function BookingForm({ availableTimes, dispatch, submitForm }) {
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [guests, setGuests] = useState(1);
    const [occasion, setOccasion] = useState('Select an Occasion');
    const [formValid, setFormValid] = useState(false);

    useEffect(() => {
        const isValid =
        date !== '' &&
        time !== '' &&
        guests >= 1 &&
        guests <= 10 &&
        occasion !== '';

        setFormValid(isValid);
    }, [date, time, guests, occasion]);

    const handleDateChange = (e) => {
        const newDate = e.target.value;
        setDate(newDate);
        dispatch({ type: 'update', payload: newDate });
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === 'time') setTime(value);
        else if (name === 'guests') setGuests(Number(value));
        else if (name === 'occasion') setOccasion(value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = { date, time, guests, occasion };
        submitForm(formData);
    };

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="date">Date</label>
            <input
                type="date"
                id="date"
                name="date"
                value={date}
                onChange={handleDateChange}
                required
                aria-required="true"
            />

            <label htmlFor="time">Time</label>
            <select
                id="time"
                name="time"
                value={time}
                onChange={handleChange}
                required
                aria-required="true"
            >
                <option value="">Select a time</option>
                {availableTimes.map(time => (
                    <option key={time} value={time}>{time}</option>
                ))}
            </select>

            <label htmlFor="guests">Number of Guests</label>
            <input
                type="number"
                id="guests"
                name="guests"
                value={guests}
                onChange={handleChange}
                min="1"
                max="10"
                required
                aria-required="true"
            />

            <label htmlFor="occasion">Occasion</label>
            <select
                id="occasion"
                name="occasion"
                value={occasion}
                onChange={handleChange}
                required
                aria-required="true"
            >
                <option value="">Select an occasion</option>
                <option value="Birthday">Birthday</option>
                <option value="Anniversary">Anniversary</option>
            </select>

            <button type="submit" disabled={!formValid} aria-label="On Click">Submit</button>
        </form>
    );
}

export default BookingForm;