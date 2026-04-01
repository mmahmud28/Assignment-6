const Rating = () => {
    return (
        <div className='w-full bg-linear-to-r from-[#4F39F6] to-[#9514FA]'>

            <div className="max-w-6xl mx-auto px-12 py-8 flex justify-center items-center gap-16 text-center">

                <div>
                    <h2 className="text-4xl text-white font-bold">50K+</h2>
                    <p className="text-[#c0c0c0]">Active Users</p>
                </div>

                <div className="h-12 w-px bg-gray-300"></div>

                <div>
                    <h2 className="text-4xl text-white font-bold">200+</h2>
                    <p className="text-[#c0c0c0]">Premium Tools</p>
                </div>

                <div className="h-12 w-px bg-gray-300"></div>

                <div>
                    <h2 className="text-4xl text-white font-bold">4.9</h2>
                    <p className="text-[#c0c0c0]">Rating</p>
                </div>

            </div>

        </div>
    );
};

export default Rating;