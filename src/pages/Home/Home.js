import React from 'react';
import HeroConteiner from '../landingPages/HeroConteiner';
import JustInFewTips from '../landingPages/JustInFewTips';
import MainDocTimeServices from '../landingPages/MainDocTimeServices';
import QualifiedDoctor from '../landingPages/QualifiedDoctor';
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
            <MainDocTimeServices /> 
            <QualifiedDoctor />
        </>
    );
};

export default Home;