import BookingForm from './BookingForm';

function BookingPage({ availableTimes, dispatch, submitForm }) {
    return (
        <main className="booking-page">
            <h1>Reserve a Table</h1>
            <BookingForm
                availableTimes={availableTimes}
                dispatch={dispatch}
                submitForm={submitForm}
            />
        </main>
    );
}

export default BookingPage;