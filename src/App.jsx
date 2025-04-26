import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Homepage from './components/Homepage';
import BookingPage from './components/BookingPage';

function App() {
    return (
        <Router>
            <Nav />
            <main>
                <Routes>
                    <Route path="/" element={<Homepage />} />
                    <Route path="/booking" element={<BookingPage />} />
                </Routes>
            </main>
        </Router>
    );
}

export default App;