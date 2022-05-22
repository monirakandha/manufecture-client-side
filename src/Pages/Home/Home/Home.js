import React from 'react';
import BusinessSummary from '../BusinessSummary/BusinessSummary';
import Hero from '../Hero/Hero';
import OurProduction from '../OurProduction/OurProduction';
import OurReview from '../OurReview/OurReview';

const Home = () => {
    return (
        <div className='px-12'>
            <Hero></Hero>
            <OurProduction></OurProduction>
            <BusinessSummary></BusinessSummary>
            <OurReview></OurReview>
        </div>
    );
};

export default Home;