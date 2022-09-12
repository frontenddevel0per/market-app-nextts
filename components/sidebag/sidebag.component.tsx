import { FC, useEffect, useState } from "react";
import Link from "next/link";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import SidebagImage from "../sidebag-image/sidebag-image.component";
import { useAppSelector } from "../../redux/hooks";
import { AddToCartButton } from "./add-to-cart-btn.styled";

const Sidebag: FC = () => {
  const [itemsArr, setItemsArr] = useState<JSX.Element[]>([]);
  const bagArr = useAppSelector((state) => state.bag.value);

  useEffect(() => {
    const imgarr = bagArr.map((item) => (
      <SidebagImage id={item.id} key={item.id} />
    ));
    setItemsArr(imgarr);
  }, [bagArr.length]);

  return (
    <div className="sidebag">
      <h1>Bag</h1>
      <div className="sidebag__list">{itemsArr}</div>
      <Link href="/bag">
        <AddToCartButton
          variant="contained"
          size="large"
          startIcon={<LocalMallIcon htmlColor="black" />}
          color="inherit"
        >
          View Bag
        </AddToCartButton>
      </Link>
    </div>
  );
};

export default Sidebag;
