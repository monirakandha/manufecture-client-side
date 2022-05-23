import React from 'react';
import HeroBg from '../../../src/assets/Images/bg-image.jpg';
import PrimaryButton from '../Shared/PrimaryButton/PrimaryButton';
const Hero = () => {
    return (
        <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src={HeroBg} className="max-w-sm rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-2xl md:text-6xl lg:text-9xl font-bold text-left">Development</h1>
            <p className="py-6 text-left text-2xl">
            There are many variations of passages but the majority have suffered alteration.There are many variations of passages but the majority have suffered alteration.
            </p>
            <div className='float-left'>
            <PrimaryButton></PrimaryButton>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Hero;