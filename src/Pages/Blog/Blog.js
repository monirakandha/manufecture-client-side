import React from 'react';

const Blog = () => {
    return (
        <div className='p-10'>
            <h1 className='text-4xl text-left'>How will you improve the performance of a React Application?</h1>
            <div className='p-10'>
            <ul class="list-disc">
            <li className='text-2xl text-left'>Keeping component state local where necessary</li>
            <li className='text-2xl text-left'>Single-File Builds</li>
            <li className='text-2xl text-left'>Avoid Reconciliation</li>
            <li className='text-2xl text-left'>Dependency optimization</li>
            <li className='text-2xl text-left'>Spreading props on DOM elements</li>
            <li className='text-2xl text-left'>Using a CDN</li>
            <li className='text-2xl text-left'>Using Immutable Data Structures</li>
            </ul>
            </div>
        </div>
    );
};

export default Blog;