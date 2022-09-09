import { FC } from "react";
import Image from "next/image";
import Link from "next/link";
import IconButton from "@mui/material/IconButton";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { myLoader } from "../helpers";
import { useAppDispatch } from "../../redux/hooks";
import { addItem } from "../../redux/bag/bag-slice";
import { IMAGE_SIZE } from "../shared.constant";

type CatalogItemProps = {
  id: number;
  title: string;
  src: string;
  price: number;
};

const CatalogItem: FC<CatalogItemProps> = ({ id, title, src, price }) => {
  const dispatch = useAppDispatch();
  return (
    <div className="catalog__list-item">
      <Link href={`/items/${id}`}>
        <div className="catalog__list-item-top">
          <div className="catalog__list-item-top-img">
            <Image
              loader={myLoader}
              src={src}
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
        <IconButton onClick={() => dispatch(addItem(id))}>
          <AddShoppingCartIcon htmlColor="white" />
        </IconButton>
      </div>
    </div>
  );
};

export default CatalogItem;
