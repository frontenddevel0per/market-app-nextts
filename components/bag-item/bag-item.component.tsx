import { FC } from "react";
import Image from "next/future/image";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import IconButton from "@mui/material/IconButton";
import { useItemApi } from "../shared.api";
import { imageLoader } from "../helpers";
import { useAppDispatch } from "../../redux/hooks";
import { addItem, removeItem } from "../../redux/bag/bag-slice";
import { IMAGE_SIZE } from "../shared.constant";
import { deleteItem } from "../../redux/bag/bag-slice";

type BagItemProps = {
  id: number;
  count: number;
};

const BagItem: FC<BagItemProps> = ({ id, count }) => {
  const dispatch = useAppDispatch();
  const { data, isSuccess } = useItemApi(id);

  if (isSuccess && data.error) {
    dispatch(deleteItem(id));
    return null;
  }

  return (
    <>
      {isSuccess ? (
        <div className="bag__item">
          <Image
            loader={imageLoader}
            src={data.images[0]}
            alt={data.title}
            width={IMAGE_SIZE}
            height={IMAGE_SIZE}
          />
          <div className="bag__item-desc">
            <h1>{data.title}</h1>
            <div className="bag__item-desc-priceholder">
              <p className="bag__item-desc-priceholder-price">
                $ {data.price} x {count}
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
      ) : null}
      ;
    </>
  );
};

export default BagItem;
