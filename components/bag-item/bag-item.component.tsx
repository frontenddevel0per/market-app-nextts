import { FC } from "react";
import Link from "next/link";
import Image from "next/future/image";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import IconButton from "@mui/material/IconButton";
import { imageLoader } from "../helpers";
import { useAppDispatch } from "../../redux/hooks";
import { addItem, removeItem } from "../../redux/bag/bag-slice";
import { IMAGE_SIZE } from "../shared.constant";
import { BagItemProps } from "./bag-item.types";

const BagItem: FC<BagItemProps> = ({ id, count, data }) => {
  const dispatch = useAppDispatch();

  return (
    <>
      <div className="bag__item">
        <Image
          loader={imageLoader}
          src={data.src}
          alt={data.title}
          width={IMAGE_SIZE}
          height={IMAGE_SIZE}
        />
        <div className="bag__item-desc">
          <Link href={`/items/${id}`}>
            <h1>{data.title}</h1>
          </Link>
          <div className="bag__item-desc-priceholder">
            <p className="bag__item-desc-priceholder-price">
              $ {data.price} x {count} = $ {data.price * count}
            </p>
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
    </>
  );
};

export default BagItem;
