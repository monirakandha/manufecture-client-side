import React from 'react';

const Blog = () => {
    return (
        <div className='p-10'>
            {/* answer one */}
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
            <div >
            {/* answer two  */}
            <h1 className='text-4xl text-left'>What are the different ways to manage a state in a React application</h1>
            </div>
            <div className=''>
            <h1 className='text-2xl text-left mt-5'>In React Have Four Kinds of React State</h1>
            <ul className="list-disc mr-5 p-10">
                <li className='text-2xl text-left'>Local state</li>
                <li className='text-2xl text-left'>Global state</li>
                <li className='text-2xl text-left'>Server state</li>
                <li className='text-2xl text-left'>URL state</li>
            </ul>
            <h1 className='text-3xl text-left'>How to Manage Local State in React</h1>
            <h3 className='text-2xl text-left mt-5'>Local state is perhaps the easiest kind of state to manage in React, considering there are so many tools built into the core React library for managing it.</h3>
            <h1 className='text-3xl text-left mt-5'>How to Manage Global State in React</h1>
            <h3 className='text-2xl text-left mt-5'>To manage it, however, you should opt for a third-party solution. Many developers are inclined to use built-in React features like the Context API to manage their state.</h3>

            <h1 className='text-3xl text-left mt-5'>How to Manage Server State in React</h1>
            <h3 className='text-2xl text-left mt-5'>Server state can be deceptively challenging to manage.
            At first, it seems you just need to fetch data and display it in the page. But then you need to display a loading spinner while you are waiting for the data. Then you need to handle errors and display them to the user as they arise.
            What happens when there is a network error? Do I really need to hit my server every time my user visits the home page if the data hasn’t changed? Do I need to add useState and useEffect in every component I want to fetch my data?
            To fix this, there are a couple of great libraries that make data fetching in React a breeze: SWR and React Query.</h3>

            <h1 className='text-3xl text-left mt-5'>How to Manage URL State in React</h1>
            <h3 className='text-2xl text-left mt-5'>To end a difficult topic on a positive note, URL state is largely already managed for you if you are using a framework like Next.js or the current version of React Router.
            URL state is quite easy to manage, usually through custom hooks that give us all the information we need about our location, history, and pathname.
            If you are using React Router, you can get all the information you need using useHistory or useLocation.</h3>
            {/* answer 3 */}
            <h1 className='text-3xl text-left mt-5'>How does prototypical inheritance work?</h1>
            <h3 className='text-2xl text-left mt-5'>Prototypal: JavaScript is unique in a lot of ways. It is the major browser-supported language that powers most user interfaces online. It has its own quirks in syntax and equality that can range from endearing to maddeningly annoying. However, JavaScripts biggest unique point is object inheritance and the prototype chain.</h3>
            {/* answer 4 */}
            <h1 className='text-3xl text-left mt-5'>Why you do not set the state directly in React. For example, if you have const [products, setProducts] = useState([]). Why you do not set products = [...] instead, you use the setProducts</h1>
            <ul className="list-disc mr-5 p-10">
                <li className='text-2xl text-left'>If you update it directly, calling the setState() afterward may just replace the update you made.</li>
                <li className='text-2xl text-left'>When you directly update the state, it does not change this.state immediately. Instead, it creates a pending state transition, and accessing it after calling this method will only return the present value.</li>
                <li className='text-2xl text-left'>You will lose control of the state across all components.</li>
            </ul>
            {/* answer 5 */}
            <h1 className='text-3xl text-left mt-5'>What is a unit test?</h1>
            <h3 className='text-2xl text-left mt-5'>Unit testing is a way to test units - the smallest components of your software, the smallest piece of code. A unit can be a single function. The goal is to validate that each unit performs as it should. A unit test tests a behavior in isolation to other tests. If the test relies on an external system, it is not a Unit Test. Unit Tests should be written during the design phase, prior to implementation to prevent defects from being deployed to production. They should be run every time the code is changed and provide a clear description of the feature being tested.</h3>
            <h1 className='text-3xl text-left mt-5'>Why should write unit tests?</h1>
            <ul className="list-disc mr-5 p-10">
                <li className='text-2xl text-left'>lower the potentially harmful impact of changes to your code</li>
                <li className='text-2xl text-left'>catching defects introduced due to the code change</li>
                <li className='text-2xl text-left'>maintaining code</li>
                <li className='text-2xl text-left'>reusing the code</li>
                <li className='text-2xl text-left'>faster development</li>
                <li className='text-2xl text-left'>lowering the cost of fixing defects on lower testing level</li>
                <li className='text-2xl text-left'>forces to clearly define problems</li>
                <li className='text-2xl text-left'>It will save  hours of debugging/maintenance/regression testing time</li>
                <li className='text-2xl text-left'>It gives a way to back up your word</li>
            </ul>
            {/* answer 6 */}
            <h1 className='text-3xl text-left mt-5'>You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name?</h1>
            <h3 className='text-2xl text-left mt-5'>For find product by name use get method in backend for get data form dataabse use findone method for search product in fontend fetch data by dynamic product id.</h3>

            </div>
        </div>
    );
};

export default Blog;