import { FC, useState } from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import Image from "next/future/image";
import Link from "next/link";
import Button from "@mui/material/Button";
import { myLoader } from "../helpers";
import { useAppDispatch } from "../../redux/hooks";
import { addItem } from "../../redux/bag/bag-slice";
import { IMAGE_SIZE } from "../shared.constant";
import { AddButton } from "./add-button.styled";

type ItemProps = {
  id: number;
  title: string;
  desc: string;
  price: number;
  src: string[];
};

const Item: FC<ItemProps> = ({ id, title, desc, price, src }) => {
  const [activeImage, setActiveImage] = useState<string>(src[0]);
  const dispatch = useAppDispatch();

  const imagesArr = src.map((item, index) => (
    <Image
      key={index}
      loader={myLoader}
      src={item}
      alt={`image ${index}`}
      width={IMAGE_SIZE}
      height={IMAGE_SIZE}
      onClick={() => setActiveImage(item)}
    />
  ));

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
            loader={myLoader}
            src={activeImage}
            alt="mainimage"
            width={IMAGE_SIZE}
            height={IMAGE_SIZE}
          />
        </div>
        <div className="item__header-info">
          <h1>{title}</h1>
          <h3>$ {price}</h3>
          <div className="item__header-info-button">
            <AddButton
              variant="contained"
              startIcon={<AddShoppingCartIcon htmlColor="white" />}
              color="inherit"
              onClick={() => dispatch(addItem(id))}
            >
              Добавить в корзину
            </AddButton>
          </div>
        </div>
      </div>
      <div className="item__footer">
        <h2>Описание</h2>
        <p>{desc}</p>
      </div>
    </div>
  );
};

export default Item;
