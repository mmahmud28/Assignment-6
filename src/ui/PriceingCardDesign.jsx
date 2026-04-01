import React from 'react';
import { IoMdCheckmark } from 'react-icons/io';

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
                    <li className="flex items-center gap-2"><span>
                        <IoMdCheckmark className="text-green-500 text-2xl" />
                    </span>Access to 10 free tools</li>

                    <li className="flex items-center gap-2"><span>
                        <IoMdCheckmark className="text-green-500 text-2xl" />
                    </span>Basic templates</li>

                    <li className="flex items-center gap-2"><span>
                        <IoMdCheckmark className="text-green-500 text-2xl" />
                    </span>Community support</li>

                    <li className="flex items-center gap-2"><span>
                        <IoMdCheckmark className="text-green-500 text-2xl" />
                    </span>1 project per month</li>
                
                </ul>
                <button className='btn btn-primary rounded-full w-full text-xl font-semibold mt-11'>Get Started Free</button>
            </div>
        </div>
    );
};

export default PricgindCardDesign;