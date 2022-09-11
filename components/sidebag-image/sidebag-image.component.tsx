import { FC } from "react";
import Image from "next/future/image";
import { myLoader } from "../helpers";
import { IMAGE_SIZE } from "../shared.constant";
import { useQuery } from "react-query";

type SidebagImageProps = {
  id: number;
};

const SidebagImage: FC<SidebagImageProps> = ({ id }) => {
  const { data, isSuccess } = useQuery(["item", id], () =>
    fetch(`https://api.escuelajs.co/api/v1/products/${id}`).then((res) =>
      res.json()
    )
  );

  return (
    <>
      {isSuccess ? (
        <Image
          loader={myLoader}
          src={data.images[0]}
          alt={data.title}
          width={IMAGE_SIZE}
          height={IMAGE_SIZE}
        />
      ) : null}
    </>
  );
};

export default SidebagImage;
