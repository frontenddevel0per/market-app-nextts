import { FC } from "react";
import BagItem from "../bag-item/bag-item.component";

const Bag: FC = () => {
    return (
        <div className="bag">
            <h1>Check you Bag Item</h1>
            <div className="bag__list">
                <BagItem/>
                <BagItem/>
                <BagItem/>
                <BagItem/>
                <BagItem/>
            </div>
        </div>
    )
}

export default Bag;