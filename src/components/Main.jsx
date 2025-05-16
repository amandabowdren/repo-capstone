import { fetchAPI } from "./api";

export const initializeTimes = () => {
    const today = new Date();
    return fetchAPI(today);
};

export const updateTimes = (state, action) => {
    if (action.type === 'update') {
        const selectedDate = new Date(action.payload);
        return fetchAPI(selectedDate);
    }
    return state;
};

import { useReducer } from 'react';
import BookingPage from './BookingPage';
import { useNavigate } from 'react-router-dom';

function Main() {
    const navigate = useNavigate();

    const submitForm = (formData) => {
        const success = submitAPI(formData);
        if (success) {
            navigate("/confirmation");
        }
    };

    const [availableTimes, dispatch] = useReducer(updateTimes, [], initializeTimes);

    return (
        <main>
            <BookingPage
                availableTimes={availableTimes}
                dispatch={dispatch}
                submitForm={submitForm}
            />
        </main>
    );
}

export default Main;