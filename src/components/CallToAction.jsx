import { useNavigate } from 'react-router-dom';

function CallToAction() {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/booking');
    };

    return (
        <section className="cta">
            <h1>Little Lemon</h1>
            <h2>Chicago</h2>
            <p>Little Lemon is a charming neighborhood bistro that serves simple food and classic cocktails in a lively but casual enviornment.</p>
            <button className="button" onClick={handleClick}>Reserve a Table</button>
        </section>
    );
}

export default CallToAction;