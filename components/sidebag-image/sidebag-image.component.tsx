import { FC } from "react";
import Image from "next/future/image";
import { imageLoader } from "../helpers";
import { useItemApi } from "../shared.api";
import { IMAGE_SIZE } from "../shared.constant";

type SidebagImageProps = {
  id: number;
};

const SidebagImage: FC<SidebagImageProps> = ({ id }) => {
  const { data, isSuccess } = useItemApi(id);

  return (
    <>
      {isSuccess ? (
        <Image
          loader={imageLoader}
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
