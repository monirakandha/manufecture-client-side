import React from 'react';
import Banner from '../../../assets/Images/hero.png'
import PrimaryButton from '../../Shared/PrimaryButton/PrimaryButton';

const Hero = () => {
    return (
        <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src={Banner} className="w-50 md:w-48 lg:w-80 rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold text-left">High-Performance Machines Tools For Profitable Solutions</h1>
            <p className="py-6 text-left text-2xl">
            Custom Solutions to Suit Your Need
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