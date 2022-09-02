import { FC } from "react";
import Image from "next/future/image";
import StarIcon from "@mui/icons-material/Star";
import StarHalfIcon from "@mui/icons-material/StarHalf";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import IconButton from "@mui/material/IconButton";

const BagItem: FC = () => {
  return (
    <div className="bag__item">
      {/* <Image src={jacket} alt="jacket" /> */}
      <div className="bag__item-desc">
        <h1>Dell XPS 13</h1>
        <h2>White</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam.
        </p>
        <div className="bag__item-desc-rating">
          <StarIcon />
          <StarIcon />
          <StarIcon />
          <StarIcon />
          <StarHalfIcon />
          <p>4.5 / 5</p>
        </div>
        <div className="bag__item-desc-priceholder">
          <p className="bag__item-desc-priceholder-price">$ 1799.99 x 1</p>
          <div className="bag__item-desc-priceholder-counter">
            <IconButton>
              <RemoveIcon />
            </IconButton>
            <p>1</p>
            <IconButton>
              <AddIcon />
            </IconButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BagItem;
