import React from 'react';
import HeroConteiner from '../landingPages/HeroConteiner';
import JustInFewTips from '../landingPages/JustInFewTips';
import ThreeEasySteps from '../landingPages/ThreeEasySteps';
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
            <ThreeEasySteps />
        </>
    );
};

export default Home;