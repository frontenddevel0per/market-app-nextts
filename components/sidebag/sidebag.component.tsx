import { FC, useEffect, useState } from "react";
import Image from "next/future/image";
import Link from "next/link";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import { useAppSelector } from "../../redux/hooks";
import { myLoader } from "../helpers";

import DB from "../../resources/DB/DB.json";

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
  const { data } = DB;

  useEffect(() => {
    let imgsArr: Array<JSX.Element> = [];
    bagArr.forEach((item, index) => {
      imgsArr.push(
        <Image
          loader={myLoader}
          src={data[item.id].src1}
          alt={data[item.id].title}
          width={250}
          height={250}
          key={index}
        />
      );
    });
    setItemsArr(imgsArr);
  }, [bagArr.length]);

  return (
    <div className="sidebag">
      <h1>Bag</h1>
      <div className="sidebag__list">
        {itemsArr}
        {/* <Image src={jacket} alt="jacket" />
        <Image src={jacket} alt="jacket" />
        <Image src={jacket} alt="jacket" />
        <Image src={jacket} alt="jacket" /> */}
      </div>
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
