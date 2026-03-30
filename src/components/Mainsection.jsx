import Cart from '../ui/cart';

const MainSection = () => {
    return (
        <div>
            <div className="flex flex-col items-center justify-center text-center py-[120px]">
                <div>
                    <h3 className="text-4xl font-bold">Premium Digital Tools</h3>
                    <p className="mt-2 text-[#627382]">
                        Choose from our curated collection of premium digital products designed <br />
                        to boost your productivity and creativity.
                    </p>
                </div>
                <div className="mt-6 flex gap-4">
                    <a className="btn bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white rounded-4xl px-6 py-5 text-lg">
                        Products
                    </a>
                    <a className="btn rounded-4xl px-6 py-5 text-lg">
                        Cart (2)
                    </a>
                </div>
            </div>
            <div>
                <Cart/>
            </div>
        </div>
    );
};

export default MainSection;