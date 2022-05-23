import React from 'react';
import HeroConteiner from '../landingPages/HeroConteiner';
import JustInFewTips from '../landingPages/JustInFewTips';
import WhenUseDocTime from '../landingPages/WhenUseDocTime';
import WhyUseDotTime from '../landingPages/WhyUseDotTime';

import Navigation from "../shared/Navigation";

const Home = () => {
    return (
        <>
            <Navigation />
            <HeroConteiner />
            <WhyUseDotTime />
            <JustInFewTips />
            <WhenUseDocTime />
        </>
    );
};

export default Home;