import React from 'react';
import One from '../../../../src/assets/user-profile/profile_user.jpg';
import Two from '../../../../src/assets/user-profile/second.webp';
import Three from '../../../../src/assets/user-profile/third.jpg';
const OurReview = () => {
    return (
        <div>
            <h1 className="text-5xl font-bold">What our Clients say About us</h1>
            <h2 className='text-2xl mt-10'>We are provide original with affordable price tools that will help anyone for grow business and work</h2>
            <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-3 mt-10 gap-4 mb-20">
                {/* first  */}
            <div class="card bg-base-100 shadow-xl">
            <figure class="px-10 pt-10">
                <img src={One} alt="Shoes" class="rounded-xl" />
            </figure>
            <div class="card-body items-center text-center">
                <h2 class="card-title">Debbi F.</h2>
                <p>"Buy this now. Thank you for making it painless, pleasant and most of all hassle free! We have no regrets! I will refer everyone I know."</p>
                <div class="card-actions">
                <div class="rating">
                    <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" checked />
                    <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" checked />
                    <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" checked />
                    <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" checked />
                    <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" checked/>
                </div>
                </div>
            </div>
            </div>
            {/* second  */}
            <div class="card bg-base-100 shadow-xl">
            <figure class="px-10 pt-10">
                <img src={Two} alt="Shoes" class="rounded-xl" />
            </figure>
            <div class="card-body items-center text-center">
                <h2 class="card-title">Gretna H.</h2>
                <p>"I would gladly pay over 600 dollars for machine tools. I will refer everyone I know. I can't say enough about machine tools."</p>
                <div class="card-actions">
                <div class="rating">
                    <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" checked />
                    <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" checked />
                    <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" checked />
                    <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" checked />
                    <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" checked/>
                </div>
                </div>
            </div>
            </div>
            {/* third  */}
            <div class="card bg-base-100 shadow-xl">
            <figure class="px-10 pt-10">
                <img src={Three} alt="Shoes" class="rounded-xl" />
            </figure>
            <div class="card-body items-center text-center">
                <h2 class="card-title">Sharyl Z.</h2>
                <p>"Best. Product. Ever! It fits our needs perfectly. After using machine tools my business skyrocketed! Nice work on your machine tools."</p>
                <div class="card-actions">
                <div class="rating">
                    <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" checked />
                    <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" checked />
                    <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" checked />
                    <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" checked />
                    <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" checked/>
                </div>
                </div>
            </div>
            </div>
            {/* fourth  */}
            </div>
            
        </div>
    );
};

export default OurReview;