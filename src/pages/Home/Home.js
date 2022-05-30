import React from 'react';
import HeroConteiner from '../landingPages/HeroConteiner';
import JustInFewTips from '../landingPages/JustInFewTips';
import WhenUseDocTime from '../landingPages/WhenUseDocTime';
import WhyUseDotTime from '../landingPages/WhyUseDotTime';
import Facilities from '../landingPages/Facilities'
import Footer from '../shared/Footer';


const Home = () => {
    return (
        <>
            <HeroConteiner />
            <WhyUseDotTime />
            <JustInFewTips />
            <Facilities />
            <WhenUseDocTime />
            <Footer />
        </>
    );
};

export default Home;