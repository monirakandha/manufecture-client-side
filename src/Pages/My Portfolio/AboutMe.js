import React from 'react';
import About from '../../../src/assets/Images/about.jpg'
import PrimaryButton from '../Shared/PrimaryButton/PrimaryButton';
const AboutMe = () => {
    return (
        <div class="hero min-h-screen">
        <div class="hero-content flex-col lg:flex-row">
            <img src={About} class="max-w-sm rounded-lg shadow-2xl" />
            <div>
            <h1 class="text-5xl font-bold text-left">About Me</h1>
            <p class="py-6 text-left">I Am full Time Web Developer. Working FOr last 1 year in this field. Now I am Explore the new things with new skills</p>
            <p class="text-2xl font-bold text-left">My Name : Monir Hosen Akandha</p>
            <p class="text-2xl font-bold text-left">My Email : monirhosenakanda@gmail.com</p>
            <p class="text-2xl font-bold text-left">Phone : 01623755479</p>
            <h1 class="py-5 text-3xl font-bold text-left">Educational Background</h1>
            <p class="text-2xl text-left">I complete My Graduation form SOUTHEAST UNIVERSITY form Computer Science Engineering</p>
            <p class="text-2xl text-left"></p>
            <h1 class="py-5 text-3xl font-bold text-left">Technical Skill</h1>
            <div>
            <ul className="list-disc p-10">
                <li className='text-2xl text-left'>Html5</li>
                <li className='text-2xl text-left'>Css3</li>
                <li className='text-2xl text-left'>Bootstrap</li>
                <li className='text-2xl text-left'>Tailwind </li>
                <li className='text-2xl text-left'>React</li>
                <li className='text-2xl text-left'>MongoDb</li>
                <li className='text-2xl text-left'>Node Js</li>
                <li className='text-2xl text-left'>Wordpress</li>
            </ul>
            </div>
            <div className='float-left'>
            <button class="btn">Contact With Me</button>
            </div>
            </div>
        </div>
        </div>
    );
};

export default AboutMe;