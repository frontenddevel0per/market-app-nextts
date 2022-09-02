import { FC } from "react";
import Image from "next/future/image";
import Link from "next/link";
import IconButton from "@mui/material/IconButton";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { myLoader } from "../helpers";
import { useAppDispatch } from "../../redux/hooks";
import { addItem } from "../../redux/bag-slice";

type CatalogItemProps = {
  id: number;
  title: string;
  subtitle: string;
  src: string;
  price: number;
};

const CatalogItem: FC<CatalogItemProps> = ({
  id,
  title,
  subtitle,
  src,
  price,
}) => {
  const dispatch = useAppDispatch();
  return (
    <div className="catalog__list-item">
      <Link href={`/items/${id}`}>
        <Image
          loader={myLoader}
          src={src}
          alt="jacket"
          width={250}
          height={250}
        />
      </Link>
      <h3>{title}</h3>
      <p>{subtitle}</p>
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
