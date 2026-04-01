import React from 'react';
import { IoMdCloseCircle } from 'react-icons/io';

const CardItem = ({ cardAdd, setCard }) => {

    const totalPrice = cardAdd.reduce((sum, item) => sum + item.price, 0);
    console.log(totalPrice);

    const removeCard = (id) => {
        const updatedCart = cardAdd.filter((itemcard) => itemcard.id !== id);
        setCard(updatedCart);
    };



    return (
        <div className='car border bg-gray-100 border-gray-400 shadow-4xl p-20 space-y-5 container mx-auto rounded-xl'>
            <h1 className='mb-15 font-black text-4xl'>Your Cart</h1>
            {
                Array.isArray(cardAdd) ? (
                    cardAdd.map((data, key) => (
                        <div key={key} className=''>
                            <div className='card shadow-sm p-4 bg-base-100 '>
                                <div className='flex justify-between items-center'>
                                    <div className='flex gap-4 items-center'>
                                        <div className='w-15 h-15 card rounded-full bg-red-100 p-3'>
                                            <img src={data.icon} alt="" />
                                        </div>
                                        <div className='items-center justify-center'>
                                            <h1 className='text-2xl font-semibold'>{data.name}</h1>
                                            <p className='text-xl font-semibold text-emerald-900'>$ {data.price}</p>
                                        </div>
                                    </div>
                                    <IoMdCloseCircle onClick={() => removeCard(data.id)} className='w-8 h-8 text-red-500' />

                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <p>Not an array</p>
                )
            }
            <div className='flex justify-between px-10'>
                <h1 className='font-semibold'>Total:</h1>
                <p className='text-xl font-bold'>$ {totalPrice}</p>
            </div>
            <button className='btn btn-primary w-full text-xl p-3'>Proceed to Checkout</button>
        </div>
    );
};

export default CardItem;