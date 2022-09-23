import { FC, useEffect, useState } from "react";
import Link from "next/link";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import SidebagImage from "../sidebag-image/sidebag-image.component";
import { useAppSelector } from "../../redux/hooks";
import { bagValueSelector } from "../helpers";
import { AddToCartButton } from "./sidebag.styled";
import { useRouter } from "next/router";

const Sidebag: FC = () => {
  const router = useRouter();
  const bagValue = useAppSelector(bagValueSelector);

  return (
    <div className="sidebag">
      <h1>Bag</h1>
      <div className="sidebag__list">
        {bagValue.map((item) => (
          <SidebagImage
            key={item.id}
            id={item.id}
            src={item.data.src}
            title={item.data.title}
          />
        ))}
      </div>
      {router.pathname === "/bag" && (
        <h3>
          Bag Total: $
          {bagValue.reduce(
            (summ, currentItem) =>
              summ + currentItem.data.price * currentItem.count,
            0
          )}
        </h3>
      )}
      <Link href="/bag">
        <AddToCartButton
          variant="contained"
          size="large"
          startIcon={<LocalMallIcon htmlColor="black" />}
          color="inherit"
        >
          {router.pathname !== "/bag" ? "View Bag" : "Checkout"}
        </AddToCartButton>
      </Link>
    </div>
  );
};

export default Sidebag;
