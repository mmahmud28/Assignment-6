import { IoCartOutline } from "react-icons/io5";

const Navbar = () => {
    return (
        <div>
            <div className="navbar bg-base-100 shadow-sm">

                <div className="w-full px-12 lg:px-24 flex justify-between items-center">

                    <div className="navbar-start">
                        <a className="py-1 text-4xl font-bold bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent">DigiTools</a>
                    </div>

                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1 text-xl font-semibold">
                            <li><a>Products</a></li>
                            <li><a>Features</a></li>
                            <li><a>Pricing</a></li>
                            <li><a>Testimonials</a></li>
                            <li><a>FAQ</a></li>
                        </ul>
                    </div>

                    <div className="navbar-end flex gap-4">
                        <IoCartOutline className="w-7 h-7" />
                        <p className="text-xl font-semibold">Login</p>
                        <a className="btn bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white rounded-4xl px-6 py-5 text-lg">Get Started</a>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Navbar;