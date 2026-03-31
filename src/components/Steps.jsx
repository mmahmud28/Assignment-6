import React from 'react';
import Stepscart from '../ui/Stepscart';

const Steps = () => {
    return (
        <div className='container mx-auto'>
            <div className='py-30 space-y-10'>
                <div className='space-y-4'>
                    <h1 className='text-4xl font-bold text-center'>Get Started in 3 Steps</h1>
                    <p className='text-center text-[#627382]'>Start using premium digital tools in minutes, not hours.</p>
                </div>
                <div className='mt-6'>
                    <Stepscart />
                </div>
            </div>
            
        </div>
    );
};

export default Steps;