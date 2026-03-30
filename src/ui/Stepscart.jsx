import Image from '../assets/user.png'

const Stepscart = () => {
    return (
        <div>
            <div className='card bg-base-100 w-96 shadow-2xl p-3 space-y-4'>

                <div className="text-right">
                    <div className='bg-linear-to-r from-[#4F39F6] to-[#9514FA] rounded-full text-white p-2 inline-block'>
                        <p>01</p>
                    </div>
                </div>

                <div className="mx-auto w-16 h-16 rounded-full bg-linear-to-r from-[#4f39f64b] to-[#9614fa38] flex items-center justify-center shadow-md">
                    <img
                        src={Image}
                        alt=""
                        className="w-8 h-8 object-contain"
                    />
                </div>

                <h3 className='text-2xl font-bold text-center'>Create Account</h3>
                <p className='text-[#627382] mb-15 text-center'>Sign up for free in seconds. No credit card required to get started.</p>
            </div>
        </div>
    );
};

export default Stepscart;