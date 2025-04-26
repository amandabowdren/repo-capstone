import CallToAction from './CallToAction';
import Specials from './Specials';
import Testimonials from './Testimonials';
import AboutUs from './AboutUs';

function Homepage() {
    return (
        <main>
            <CallToAction />
            <Specials />
            <Testimonials />
            <AboutUs />
        </main>
    );
}

export default Homepage;