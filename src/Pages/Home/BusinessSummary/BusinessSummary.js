import React from 'react';

const BusinessSummary = () => {
    return (
        <div className='mt-10 mb-10'>
            <div>
            <h1 className="text-5xl font-bold">Business Summary</h1>
             <h2 className='text-2xl mt-10'>Our professional team works to increase productivity and cost effectiveness on the market.</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-4 mt-10 gap-4">
                {/* first  */}
                <div>
                <div className="stats shadow bg-slate-900">
                <div className="stat">
                    <div className="stat-value text-primary">7,400</div>
                    <div className="stat-title text-white font-bold">Happy Customer</div>
                </div>
                </div>
                </div>
                {/* second  */}
                <div>
                <div className="stats shadow bg-primary">
                <div className="stat">
                    <div className="stat-value text-white">500 +</div>
                    <div className="stat-title text-white font-bold">Country Cover</div>
                </div>
                </div>
                </div>
                {/* third  */}
                <div>
                <div className="stats shadow bg-orange-600">
                <div className="stat">
                    <div className="stat-value text-white">9,400</div>
                    <div className="stat-title text-white font-bold">Supplier Network</div>
                </div>
                </div>
                </div>
                {/* fourth  */}
                <div>
                <div className="stats shadow bg-red-500">
                <div className="stat">
                    <div className="stat-value text-white">8400</div>
                    <div className="stat-title text-white font-bold">Retail Customer</div>
                </div>
                </div>
                </div>
            {/* end  */}
            </div>

        </div>
    );
};

export default BusinessSummary;