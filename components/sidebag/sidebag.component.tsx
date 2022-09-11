import { FC, useEffect, useState } from "react";
import Link from "next/link";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import SidebagImage from "../sidebag-image/sidebag-image.component";
import { useAppSelector } from "../../redux/hooks";

const AddToCartButton = styled(Button)({
  backgroundColor: "#ffffff",
  color: "#000000",
  "&:hover": {
    backgroundColor: "#eeeeee",
    borderColor: "#0062cc",
    boxShadow: "none",
  },
  "&:active": {
    boxShadow: "none",
    backgroundColor: "#dddddd",
  },
});

const Sidebag: FC = () => {
  const [itemsArr, setItemsArr] = useState<JSX.Element[]>([]);
  const bagArr = useAppSelector((state) => state.bag.value);

  useEffect(() => {
    let imgsArr: Array<JSX.Element> = [];
    bagArr.forEach((item, index) => {
      imgsArr.push(<SidebagImage id={item.id} key={index} />);
    });
    setItemsArr(imgsArr);
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
