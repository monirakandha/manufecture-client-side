import React from 'react';
import { Link } from 'react-router-dom';
import PortfolioOne from '../../../src/assets/Images/portfolio1.jpg';
import PortfolioTwo from '../../../src/assets/Images/portfolio2.jpg';
import PortfolioTnree from '../../../src/assets/Images/portfolio3.jpg';
const MyProject = () => {
    return (
        <div>
        <div className='mt-10'>
        <h1 class="text-5xl font-bold">Recent Work</h1>
        </div>
        <div class="grid grid-cols-3 gap-4">
        <div>
        <div class="card w-96 bg-base-100 shadow-xl mr-5 ml-10">
        <figure class="px-10 pt-10">
            <img src={PortfolioOne} alt="Shoes" class="rounded-xl" />
        </figure>
        <div class="card-body items-center text-center">
            <h2 class="card-title">Project One</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div class="card-actions">
            <button class="btn btn-primary text-white"><a href="https://jolly-tartufo-9dda37.netlify.app/">Check Now</a></button>
            </div>
        </div>
        </div>
        </div>
        <div>
        <div class="card w-96 bg-base-100 shadow-xl">
        <figure class="px-10 pt-10">
            <img src={PortfolioTwo} alt="Shoes" class="rounded-xl" />
        </figure>
        <div class="card-body items-center text-center">
            <h2 class="card-title">Project Two</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div class="card-actions">
            <button class="btn btn-primary text-white"><a href="https://lawyer-service-provider-33e79.web.app">Check Now</a></button>
            </div>
        </div>
        </div>
        </div>
        <div>
        <div class="card w-96 bg-base-100 shadow-xl">
        <figure class="px-10 pt-10">
            <img src={PortfolioTnree} alt="Shoes" class="rounded-xl" />
        </figure>
        <div class="card-body items-center text-center">
            <h2 class="card-title">Project Three</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div class="card-actions">
            <button class="btn btn-primary text-white"><a href="https://book-service-management-system.web.app/">Check Now</a></button>
            </div>
        </div>
        </div>
        </div>
        </div>
        </div>
    );
};

export default MyProject;