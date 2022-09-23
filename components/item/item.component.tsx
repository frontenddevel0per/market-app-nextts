import { FC, useEffect, useState } from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import Image from "next/future/image";
import Link from "next/link";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import { imageLoader, bagValueSelector } from "../helpers";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { addItem, addItemInBag, removeItem } from "../../redux/bag/bag-slice";
import { IMAGE_SIZE } from "../shared.constant";
import { AddButton } from "./item.styled";
import { ItemProps } from "./item.types";

const Item: FC<ItemProps> = ({ id, title, desc, price, src }) => {
  const [activeImage, setActiveImage] = useState<string>(src[0]);
  const dispatch = useAppDispatch();
  const isInBag = useAppSelector(bagValueSelector).find((e) => e.id === id);
  const data = {
    title,
    description: desc,
    price,
    src: src[0],
  };

  const imagesArr = src.map((item, index) => (
    <Image
      key={`${id}-${index}`}
      loader={imageLoader}
      src={item}
      alt={`image ${index}`}
      width={IMAGE_SIZE}
      height={IMAGE_SIZE}
      onClick={() => setActiveImage(item)}
    />
  ));

  useEffect(() => {
    setActiveImage(src[0]);
  }, [src]);

  return (
    <div className="item">
      <Link href="/">
        <Button startIcon={<ArrowBackIosIcon />} color="inherit">
          Back
        </Button>
      </Link>

      <div className="item__header">
        <div className="item__header-collage">
          <div className="item__header-collage-left">{imagesArr}</div>
          <Image
            key={`${id}-main`}
            loader={imageLoader}
            src={activeImage}
            alt="mainimage"
            width={IMAGE_SIZE}
            height={IMAGE_SIZE}
          />
        </div>
        <div className="item__header-info">
          <h1>{title}</h1>
          <h3>$ {price}</h3>

          {!isInBag ? (
            <div className="item__header-info-button">
              <AddButton
                variant="contained"
                startIcon={<AddShoppingCartIcon htmlColor="white" />}
                color="inherit"
                onClick={() => dispatch(addItemInBag({ id, data }))}
              >
                Add to cart
              </AddButton>
            </div>
          ) : (
            <div className="item__header-info-count">
              <IconButton onClick={() => dispatch(removeItem(id))}>
                <RemoveIcon fontSize="medium" />
              </IconButton>
              <p>{isInBag.count}</p>
              <IconButton onClick={() => dispatch(addItem(id))}>
                <AddIcon fontSize="medium" />
              </IconButton>
            </div>
          )}
        </div>
      </div>
      <div className="item__footer">
        <h2>Description</h2>
        <p>{desc}</p>
      </div>
    </div>
  );
};

export default Item;
