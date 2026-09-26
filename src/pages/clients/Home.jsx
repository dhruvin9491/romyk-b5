import HeroSec from '../../components/client/HeroSec';
import AboutSec from '../../components/client/AboutSec';
import CreamSec from '../../components/client/CreamSec';
import ServicesSec from '../../components/client/ServicesSec';
import TestimonialSec from '../../components/client/TestimonialSec';
import ContactSec from '../../components/client/ContactSec';

function Home() {
    return (
        <main>
            <HeroSec />
            <AboutSec />
            <CreamSec />
            <ServicesSec />
            <TestimonialSec />
            <ContactSec />
        </main>
    );
}

export default Home;