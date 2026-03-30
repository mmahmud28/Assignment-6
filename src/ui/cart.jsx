import { IoMdCheckmark } from "react-icons/io";
import Image from "../assets/products/writing_2327400 1.png"
import { FaRegCircleDot } from "react-icons/fa6";
import { FaDotCircle } from "react-icons/fa";

const Cart = () => {
    return (
        <div>
            <div>
                <div className="card bg-base-100 w-96 shadow-2xl p-3 space-y-4">

                    <div className="text-right">
                        <p className="bg-[#FEF3C6] inline-block px-3 py-1 rounded-full">
                            Best Seller
                        </p>
                    </div>

                    <div className="w-15 h-15 bg-base-100 shadow-sm p-1 flex items-center justify-center rounded-full">
                        <img src={Image} alt="" />
                    </div>

                    <h3 className="text-2xl font-bold">AI Writing Pro</h3>
                    <p className="text-[#627382]">Generate high-quality content, blogs, and marketing copy in seconds with advanced AI.</p>
                    <h3 className="text-2xl font-bold">$29 <span className="font-normal text-xl text-[#627382]">/mo</span></h3>

                    <ul className="space-y-2">
                        <li className="flex items-center gap-2">
                            <span>
                                <IoMdCheckmark className="text-green-500 text-2xl" />
                            </span> Unlimited AI generations
                        </li>
                        <li className="flex items-center gap-2">
                            <span>
                                <IoMdCheckmark className="text-green-500 text-2xl" />
                            </span> 50+ writing templates
                        </li>
                        <li className="flex items-center gap-2">
                            <span>
                                <IoMdCheckmark className="text-green-500 text-2xl" />
                            </span> Grammar checker
                        </li>
                    </ul>
                    <button className="btn bg-linear-to-r from-[#4F39F6] to-[#9514FA] rounded-full text-white text-xl px-10 py-6">Buy Now</button>

                    
                </div>
            </div>
        </div>
    );
};

export default Cart;