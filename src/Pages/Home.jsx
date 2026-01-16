import React from 'react';
import Hero from '../Components/Hero';
import HeroSlider from '../Components/Hero';
import ModernHero from '../Components/Hero';
import WhyChooseUs from '../Components/WhyChooseUs';
import OurFeatures from '../Components/OurFeatures';
import HowItWorks from '../Components/HowItWorks';
import WhoIsItFor from '../Components/WhoIsItFor';

const Home = () => {
    return (
        <div>
        <ModernHero/>
        <div className='mt-3'>
            <WhyChooseUs/>
        </div>
        <div className='mt-4'>
            <OurFeatures/>
        </div>
        <div className='mt-3'>
            <HowItWorks/>
        </div>
        <div className='mt-3'>
            <WhoIsItFor/>
        </div>
        </div>
    );
};

export default Home;