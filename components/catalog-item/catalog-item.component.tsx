import { FC } from "react";
import Image from "next/image";
import Link from "next/link";
import IconButton from "@mui/material/IconButton";
import { AddToCartIconButton } from "./catalog-item.styled";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { bagValueSelector, imageLoader } from "../helpers";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { addItem, removeItem } from "../../redux/bag/bag-slice";
import { IMAGE_SIZE } from "../shared.constant";
import noImage from "../../resources/img/noimage.png";

type CatalogItemProps = {
  id: number;
  title: string;
  src: string;
  price: number;
};

const CatalogItem: FC<CatalogItemProps> = ({ id, title, src, price }) => {
  const dispatch = useAppDispatch();
  const bagValue = useAppSelector(bagValueSelector);
  const isInBag = bagValue.find((e) => e.id === id);
  return (
    <div className="catalog__list-item">
      <Link href={`/items/${id}`}>
        <div className="catalog__list-item-top">
          <div className="catalog__list-item-top-img">
            <Image
              loader={imageLoader}
              src={src !== "" ? src : noImage}
              alt={title}
              width={IMAGE_SIZE}
              height={IMAGE_SIZE}
            />
          </div>
          <h3>{title}</h3>
        </div>
      </Link>
      <div className="catalog__list-item-bottom">
        <h4>$ {price}</h4>
        {!isInBag ? (
          <AddToCartIconButton onClick={() => dispatch(addItem(id))}>
            <AddShoppingCartIcon htmlColor="white" />
          </AddToCartIconButton>
        ) : (
          <div className="catalog__list-item-bottom-count">
            <IconButton onClick={() => dispatch(removeItem(id))}>
              <RemoveIcon />
            </IconButton>
            <p>{isInBag.count}</p>
            <IconButton onClick={() => dispatch(addItem(id))}>
              <AddIcon />
            </IconButton>
          </div>
        )}
      </div>
    </div>
  );
};

export default CatalogItem;
