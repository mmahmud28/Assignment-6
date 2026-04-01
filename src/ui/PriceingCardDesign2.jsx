import React from 'react';
import { IoMdCheckmark } from 'react-icons/io';

const PricgindCardDesign2 = () => {
    return (
        <div className='card bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white w-96 shadow-sm p-5 '>
            <p className="w-fit -mt-9 items-center flex mx-auto text-[#BB4D00] px-4 py-1 bg-amber-100 rounded-full">
                Popular
            </p>
            <div className='space-y-5'>
                <div>
                    <h1 className='font-bold text-2xl'>Starter</h1>
                    <p className=''>Perfect for getting started</p>
                </div>
                <div className='flex items-center'><h1 className='text-3xl font-semibold'>$29</h1><p className=''>/month</p></div>
                <ul className=''>

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

                     <li className="flex items-center gap-2"><span>
                        <IoMdCheckmark className="text-green-500 text-2xl" />
                    </span>Cloud sync</li>

                     <li className="flex items-center gap-2"><span>
                        <IoMdCheckmark className="text-green-500 text-2xl" />
                    </span>Advanced analytics</li>
                </ul>
                <button className='btn bg-white rounded-full w-full text-xl font-semibold'>Get Started Free</button>
            </div>
        </div>
    );
};

export default PricgindCardDesign2;