import React from 'react';
import HeroConteiner from '../landingPages/HeroConteiner';
import JustInFewTips from '../landingPages/JustInFewTips';
import WhenUseDocTime from '../landingPages/WhenUseDocTime';
import WhyUseDotTime from '../landingPages/WhyUseDotTime';


const Home = () => {
    return (
        <>
            <HeroConteiner />
            <WhyUseDotTime />
            <JustInFewTips />
            <WhenUseDocTime />
        </>
    );
};

export default Home;