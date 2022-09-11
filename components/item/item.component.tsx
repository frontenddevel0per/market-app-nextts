import { FC, useState } from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Rating from "@mui/material/Rating";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import Image from "next/future/image";
import Link from "next/link";
import { myLoader } from "../helpers";
import { useAppDispatch } from "../../redux/hooks";
import { addItem } from "../../redux/bag/bag-slice";
import { IMAGE_SIZE } from "../shared.constant";

const AddButton = styled(Button)({
  backgroundColor: "#000000",

  color: "#ffffff",
  "&:hover": {
    backgroundColor: "#404040",
    borderColor: "#0062cc",
    boxShadow: "none",
  },
  "&:active": {
    boxShadow: "none",
    backgroundColor: "#555555",
  },
});

type ItemProps = {
  id: number;
  title: string;
  // rating: number;
  desc: string;
  price: number;
  src1: string;
  src2: string;
  src3: string;
};

const Item: FC<ItemProps> = ({
  id,
  title,
  // rating,
  desc,
  price,
  src1,
  src2,
  src3,
}) => {
  const [activeImage, setActiveImage] = useState<string>(src1);
  const dispatch = useAppDispatch();

  return (
    <div className="item">
      <Link href="/">
        <Button startIcon={<ArrowBackIosIcon />} color="inherit">
          Back
        </Button>
      </Link>

      <div className="item__header">
        <div className="item__header-collage">
          <div className="item__header-collage-left">
            <Image
              loader={myLoader}
              src={src1}
              alt="image1"
              width={IMAGE_SIZE}
              height={IMAGE_SIZE}
              onClick={() => setActiveImage(src1)}
            />
            <Image
              loader={myLoader}
              src={src2}
              alt="image2"
              width={IMAGE_SIZE}
              height={IMAGE_SIZE}
              onClick={() => setActiveImage(src2)}
            />
            <Image
              loader={myLoader}
              src={src3}
              alt="image3"
              width={IMAGE_SIZE}
              height={IMAGE_SIZE}
              onClick={() => setActiveImage(src3)}
            />
          </div>
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
          {/* <div className="item__header-info-rating">
            <Rating name="read-only" value={rating} precision={0.5} readOnly />
            <p>{rating} / 5</p>
          </div> */}
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
