import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Nav from './components/Nav';
//import Homepage from './components/Homepage';
import BookingPage from './components/BookingPage';
import Main from './Main';
import ConfirmedBooking from './ConfirmedBooking';

function App() {
    return (
        <Router>
            <Nav />
            <Link to="/">Home</Link>
            <Link to="/booking">Reserve a Table</Link>
            <main>
                <Routes>
                    <Route path="/" element={<Main />} />
                    <Route path="/booking" element={<BookingPage />} />
                    <Route path="/confirmation" element={<ConfirmedBooking />} />
                </Routes>
            </main>
        </Router>
    );
}

export default App;