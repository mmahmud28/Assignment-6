import React from 'react';

const PricgindCardDesign = () => {
    return (
        <div className='card bg-base-100 w-96 shadow-sm p-5'>
            <div className='space-y-5'>
                <div>
                    <h1 className='font-bold text-2xl'>Starter</h1>
                    <p className='text-[#627382]'>Perfect for getting started</p>
                </div>
                <div className='flex'><h1>$0</h1><p className='text-[#627382]'>/month</p></div>
                <ul className='text-[#627382]'>
                    <li>Access to 10 free tools</li>
                    <li>Basic templates</li>
                    <li>Community support</li>
                    <li>1 project per month</li>
                </ul>
                <button className='btn btn-primary rounded-full w-full text-xl font-semibold'>Get Started Free</button>
            </div>
        </div>
    );
};

export default PricgindCardDesign;