import React from 'react';
import HeroBg from '../../../src/assets/Images/bg-image.jpg'
import PrimaryButton from '../Shared/PrimaryButton/PrimaryButton';
import AboutMe from './AboutMe';
import Hero from './Hero';
import MyProject from './MyProject';
const MyPortfolio = () => {
    return (
        <div>
            <Hero></Hero>
            <AboutMe></AboutMe>
            <MyProject></MyProject>
      </div>
    );
};

export default MyPortfolio;