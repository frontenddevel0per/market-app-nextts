import { FC } from "react";
import BagItem from "../bag-item/bag-item.component";
import { useAppSelector } from "../../redux/hooks";
import { bagValueSelector } from "../helpers";

const Bag: FC = () => {
  const bagValue = useAppSelector(bagValueSelector);
  const bagItems = bagValue.map((item, index) => (
    <BagItem key={item.id} id={item.id} count={item.count} />
  ));

  return (
    <div className="bag">
      <h1>Check you Bag Item</h1>
      <div className="bag__list">{bagItems}</div>
    </div>
  );
};

export default Bag;
