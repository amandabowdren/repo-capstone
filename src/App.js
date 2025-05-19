import { useReducer } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import './App.css';

import Home from './components/Homepage';
import BookingPage from './components/BookingPage';
import AboutUs from './components/AboutUs';
import Specials from './components/Specials';
import ConfirmedBooking from './components/ConfirmedBooking';
import OrderOnline from './components/OrderOnline';
import Login from './components/Login';
import Header from './Header';
import Footer from './Footer';

const initialTimes = ['17:00', '18:00', '19:00', '20:00'];

function updateTimes(state, action) {
  switch(action.type) {
    case 'update':
      return initialTimes;
    default:
      return state;
  }
}

function App() {
  const [availableTimes, dispatch] = useReducer(updateTimes, initialTimes);
  const navigate = useNavigate();

  const submitForm = (formData) => {
    console.log('Form submitted:', formData);
    navigate('/confirmed');
  };

  return (
    <div>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/menu" element={<Specials />} />
          <Route
            path="/booking"
            element={
              <BookingPage
                availableTimes={availableTimes}
                dispatch={dispatch}
                submitForm={submitForm}
              />
            }
          />
          <Route path="/confirmed" element={<ConfirmedBooking />} />
          <Route path="/order" element={<OrderOnline />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
