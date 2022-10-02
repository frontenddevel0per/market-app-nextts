import { FC } from "react";
import BagItem from "../bag-item/bag-item.component";
import { useAppSelector } from "../../redux/hooks";
import { bagLengthSelector, bagValueSelector } from "../helpers";
import BagPlug from "../bag-plug/bag-plug";

const Bag: FC = () => {
  const bagValue = useAppSelector(bagValueSelector);
  const bagLength = useAppSelector(bagLengthSelector);
  const bagItems = bagValue.map((item) => (
    <BagItem key={item.id} id={item.id} count={item.count} data={item.data} />
  ));

  return (
    <div className="bag">
      <h1>Check you Bag Item</h1>
      <div className="bag__list">
        {bagLength === 0 ? <BagPlug /> : bagItems}
      </div>
    </div>
  );
};

export default Bag;
