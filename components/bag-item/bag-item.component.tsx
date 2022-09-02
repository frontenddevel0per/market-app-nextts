import { FC } from "react";
import Image from "next/future/image";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import IconButton from "@mui/material/IconButton";
import { Rating } from "@mui/material";
import { myLoader } from "../helpers";
import { useAppDispatch } from "../../redux/hooks";
import { addItem, removeItem } from "../../redux/bag-slice";

type BagItemProps = {
  id: number;
  src: string;
  title: string;
  subtitle: string;
  shortdesc: string;
  rating: number;
  price: number;
  count: number;
};

const BagItem: FC<BagItemProps> = ({
  id,
  src,
  title,
  subtitle,
  shortdesc,
  rating,
  price,
  count,
}) => {
  const dispatch = useAppDispatch();
  return (
    <div className="bag__item">
      <Image loader={myLoader} src={src} alt={title} width={250} height={250} />
      <div className="bag__item-desc">
        <h1>{title}</h1>
        <h2>{subtitle}</h2>
        <p>{shortdesc}</p>
        <div className="bag__item-desc-rating">
          <Rating name="read-only" value={rating} precision={0.5} readOnly />
          <p>{rating} / 5</p>
        </div>
        <div className="bag__item-desc-priceholder">
          <p className="bag__item-desc-priceholder-price">$ 1799.99 x 1</p>
          <div className="bag__item-desc-priceholder-counter">
            <IconButton onClick={() => dispatch(removeItem(id))}>
              <RemoveIcon />
            </IconButton>
            <p>{count}</p>
            <IconButton onClick={() => dispatch(addItem(id))}>
              <AddIcon />
            </IconButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BagItem;
