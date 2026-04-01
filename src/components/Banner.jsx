import { CiPlay1 } from "react-icons/ci";
import banners from "../assets/banner.png"
import { FaRegCircleDot } from "react-icons/fa6";
import { FaDotCircle } from "react-icons/fa";

const Banner = () => {
    return (
        <div className="w-full px-12 lg:px-24 flex justify-between items-center py-22">
            <div className="space-y-5">

                <ul className="inline-flex items-center bg-[#E1E7FF] rounded-full px-6 py-2 space-x-3">

                    <li className="relative w-6 h-6 shrink-0">
                        <FaRegCircleDot className="absolute top-0 left-0 w-6 h-6 text-[#4F39F6]" />
                        <FaDotCircle className="absolute top-1/2 left-1/2 w-3 h-3 -translate-x-1/2 -translate-y-1/2 text-[#9514FA]" />
                    </li>

                    <li className="text-base font-bold bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent">
                        New: AI-Powered Tools Available
                    </li>
                </ul>

                <h1 className="text-7xl font-bold">Supercharge Your <br /> <span className="bg-gradient-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent">
                    Digital Workflow
                </span></h1>
                <p>Access premium AI tools, design assets, templates, and productivity <br />
                    software—all in one place. Start creating faster today. <br />
                    Explore Products
                </p>
                <div className="flex gap-3">
                    <a className="btn bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white rounded-4xl 
                    px-6 py-6 text-lg">Explore Products</a>

                    <a className="btn btn-outline btn-primary bg-linear-to-r rounded-4xl px-6 py-6 text-lg"><CiPlay1 /> Watch Demo</a>

                </div>
            </div>


            <div>
                <img className="max-w-125 max-h-125" src={banners} alt="" />
            </div>
        </div>
    );
};

export default Banner;