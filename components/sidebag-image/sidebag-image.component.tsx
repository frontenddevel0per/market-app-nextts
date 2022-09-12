import { FC } from "react";
import Image from "next/future/image";
import { myLoader, useQueryItem } from "../helpers";
import { IMAGE_SIZE } from "../shared.constant";

type SidebagImageProps = {
  id: number;
};

const SidebagImage: FC<SidebagImageProps> = ({ id }) => {
  const { data, isSuccess } = useQueryItem(id);

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
