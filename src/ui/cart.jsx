import { use } from "react";
import ModelCard from "../components/ModelCard";

const Cart = ({ modelData, cardAdd, setCard }) => {
    const data = use(modelData);
    return (
        <div className="card shadow-2xl p-5 container mx-auto">
            <div className="grid grid-cols-3 gap-4 mx-auto">
                {data.map((myData) => (
                    <ModelCard key={myData.id} myData={myData} cardAdd={cardAdd} setCard={setCard}/>
                ))}
            </div>

        </div>
    );
};

export default Cart;