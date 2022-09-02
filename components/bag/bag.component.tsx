import { FC } from "react";
import BagItem from "../bag-item/bag-item.component";
import { useAppSelector } from "../../redux/hooks";

import DB from "../../resources/DB/DB.json";

const Bag: FC = () => {
  const bagValue = useAppSelector((state) => state.bag.value);
  const { data } = DB;
  const bagItems = bagValue.map((item, index) => (
    <BagItem
      key={index}
      id={item.id}
      src={data[item.id].src1}
      title={data[item.id].title}
      subtitle={data[item.id].subtitle}
      shortdesc={data[item.id].shortdesc}
      rating={data[item.id].rating}
      price={data[item.id].price}
      count={item.count}
    />
  ));

  return (
    <div className="bag">
      <h1>Check you Bag Item</h1>
      <div className="bag__list">{bagItems}</div>
    </div>
  );
};

export default Bag;
