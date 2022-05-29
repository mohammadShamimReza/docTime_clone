import React from 'react';
import HeroConteiner from '../landingPages/HeroConteiner';
import JustInFewTips from '../landingPages/JustInFewTips';
import WhenUseDocTime from '../landingPages/WhenUseDocTime';
import WhyUseDotTime from '../landingPages/WhyUseDotTime';
import Facilities from '../landingPages/Facilities'


const Home = () => {
    return (
        <>
            <HeroConteiner />
            <WhyUseDotTime />
            <JustInFewTips />
            <Facilities />
            <WhenUseDocTime />
        </>
    );
};

export default Home;