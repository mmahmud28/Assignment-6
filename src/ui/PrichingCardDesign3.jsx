import React from 'react';
import { IoMdCheckmark } from 'react-icons/io';

const PrichingCardDesign3 = () => {
    return (
        <div className='card bg-base-100 w-96 shadow-sm p-5'>
            <div className='space-y-5'>
                <div>
                    <h1 className='font-bold text-2xl'>Enterprise</h1>
                    <p className='text-[#627382]'>For teams and businesses</p>
                </div>
                <div className='flex'><h1>$99</h1><p className='text-[#627382]'>/month</p></div>
                <ul className='text-[#627382]'>
                    <li className="flex items-center gap-2"><span>
                        <IoMdCheckmark className="text-green-500 text-2xl" />
                    </span>Everything in Pro</li>

                    <li className="flex items-center gap-2"><span>
                        <IoMdCheckmark className="text-green-500 text-2xl" />
                    </span>Team collaboration</li>

                    <li className="flex items-center gap-2"><span>
                        <IoMdCheckmark className="text-green-500 text-2xl" />
                    </span>Custom integrations</li>

                    <li className="flex items-center gap-2"><span>
                        <IoMdCheckmark className="text-green-500 text-2xl" />
                    </span>Dedicated support</li>

                    <li className="flex items-center gap-2"><span>
                        <IoMdCheckmark className="text-green-500 text-2xl" />
                    </span>SLA guarantee</li>

                    <li className="flex items-center gap-2"><span>
                        <IoMdCheckmark className="text-green-500 text-2xl" />
                    </span>Custom branding</li>

                </ul>
                <button className='btn btn-primary rounded-full w-full text-xl font-semibold'>Get Started Free</button>
            </div>
        </div>
    );
};

export default PrichingCardDesign3;