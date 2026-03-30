import React from 'react';
import Stepscart from '../ui/Stepscart';

const Steps = () => {
    return (
        <div className='py-30 space-y-10'>
            <div>
                <h1>Get Started in 3 Steps</h1>
                <p>Start using premium digital tools in minutes, not hours.</p>
            </div>
            <div>
                <Stepscart/>
            </div>
        </div>
    );
};

export default Steps;