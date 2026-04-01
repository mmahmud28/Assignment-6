import { IoMdCheckmark } from 'react-icons/io';
import { toast } from 'react-toastify';

const ModelCard = ({ myData, cardAdd, setCard }) => {
    const isBuy = cardAdd.some(item => item.id === myData.id);

    const handleBuyButton = () => {
        const alreadyExists = cardAdd.some(item => item.id === myData.id);

        if (alreadyExists) {
            toast.error("Already in cart!");
            return;
        }

        setCard(prev => [...prev, myData]);
        toast.success(`${myData.name} added to cart!`);
    };
    return (
        <div>
            <div className="card bg-base-100 w-96 shadow-2xl p-3 space-y-4">

                <div className="text-right">
                    <p className="bg-[#FEF3C6] inline-block font-semibold px-3 py-1 rounded-full">
                        {myData.tag}
                    </p>
                </div>

                <div className="w-16 h-16 bg-base-100 shadow-sm p-3 flex items-center justify-center rounded-full">
                    <img src={myData.icon} alt="" />
                </div>

                <h3 className="text-2xl font-bold">{myData.name}</h3>
                <p className="text-[#627382]">{myData.description}</p>
                <h3 className="text-2xl font-bold">${myData.price}<span className="font-normal text-xl text-[#627382]">/{myData.period}</span></h3>

                <ul className="space-y-2">
                    {myData.features.map((features, key) => {
                        return (
                            <li key={key} className="flex items-center gap-2">
                                <span>
                                    <IoMdCheckmark className="text-green-500 text-2xl" />
                                </span> {features}
                            </li>
                        )
                    })}
                </ul>
                <button onClick={handleBuyButton} className="btn bg-linear-to-r from-[#4F39F6] to-[#9514FA] rounded-full text-white text-xl px-10 py-6"> {isBuy ? "Already Buy" : "Buy Now"}</button>


            </div>
        </div>
    );
};

export default ModelCard;