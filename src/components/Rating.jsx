const Rating = () => {
    return (
        <div className='w-full bg-linear-to-r from-[#4F39F6] to-[#9514FA]'>
            <div className="px-12 lg:px-24 flex justify-between items-center py-8"> 
                <div className="px-20">
                    <h2 className="text-4xl text-white font-bold">50K+</h2>
                    <p className="text-[#c0c0c0]">Active Users</p>
                </div>

                 <div className="divider"></div>


                 <div className="px-20">
                    <h2 className="text-4xl text-white font-bold">200+</h2>
                    <p className="text-[#c0c0c0]">Premium Tools</p>
                </div>

                <div className="divider"></div>
                
                 <div className="px-20">
                    <h2 className="text-4xl text-white font-bold">4.9</h2>
                    <p className="text-[#c0c0c0]">Rating</p>
                </div>


            </div>
        </div>
    );
};

export default Rating;