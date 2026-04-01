import { useEffect, useState } from 'react';
import Cart from '../ui/cart';
import CardItem from './CardItem';

const MainSection = ({ modelData,setCardCount }) => {
    const [activeTab, setActiveTab] = useState("products");
    const [cardAdd, setCard] = useState([]);

    let itemCount = cardAdd.length || 0;

    useEffect(() => {
        setCardCount(itemCount);
    }, [cardAdd]);



    return (
        <div>
            <div className="flex flex-col items-center justify-center text-center py-30">
                <div>
                    <h3 className="text-4xl font-bold">Premium Digital Tools</h3>
                    <p className="mt-2 text-[#627382]">
                        Choose from our curated collection of premium digital products designed <br />
                        to boost your productivity and creativity.
                    </p>
                </div>
                <div className="mt-6 flex gap-4">
                    <div role="tablist" className="tabs tabs-box gap-1 p-2 shadow-2xl bg-gray-300 rounded-3xl">
                        <a role="tab" onClick={() => setActiveTab("products")}
                            className={`tab rounded-4xl font-bold ${activeTab === "products"
                                ? "bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white"
                                : ""
                                }`}>Products</a>

                        <a role="tab" onClick={() => setActiveTab("cart")}
                            className={`tab rounded-4xl font-bold ${activeTab === "cart"
                                ? "bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white"
                                : ""
                                }`}>Cart ({itemCount})</a>
                    </div>
                </div>
            </div>
            <div>
                {activeTab === "products" && <Cart modelData={modelData} cardAdd={cardAdd} setCard={setCard} />}
                {activeTab === "cart" && <CardItem modelData={modelData} cardAdd={cardAdd} setCard={setCard} />}

            </div>
        </div>
    );
};

export default MainSection;