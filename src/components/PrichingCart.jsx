import React from 'react';
import PricgindCardDesign from '../ui/PriceingCardDesign';
import PricgindCardDesign2 from '../ui/PriceingCardDesign2';

const PrichingCart = () => {
    return (
        <div className='container mx-auto space-y-15 my-8'>
            <div>
                <h1 className='font-bold text-4xl text-center'>Simple, Transparent Pricing</h1>
                <p className='text-center mt-3 text-[#627382]'>Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>
            </div>
            <div className='mt-5 flex gap-5'>
                <div>
                    <PricgindCardDesign />

                </div>
                <div>
                    <PricgindCardDesign2 />
                </div>
            </div>
        </div>
    );
};

export default PrichingCart;