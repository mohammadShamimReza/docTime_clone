import React from 'react';
import HeroConteiner from '../landingPages/HeroConteiner';
import JustInFewTips from '../landingPages/JustInFewTips';
import WhyUseDotTime from '../landingPages/WhyUseDotTime';

import Navigation from "../shared/Navigation";

const Home = () => {
    return (
        <>
            <Navigation />
            <HeroConteiner />
            <WhyUseDotTime />
            <JustInFewTips />
        </>
    );
};

export default Home;