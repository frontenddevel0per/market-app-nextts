import { FC } from "react";
import Image from "next/future/image";
import { imageLoader } from "../helpers";
import { useItemApi } from "../shared.api";
import { IMAGE_SIZE } from "../shared.constant";
import { useAppDispatch } from "../../redux/hooks";
import { deleteItem } from "../../redux/bag/bag-slice";

type SidebagImageProps = {
  id: number;
};

const SidebagImage: FC<SidebagImageProps> = ({ id }) => {
  const { data, isSuccess } = useItemApi(id);
  const dispatch = useAppDispatch();

  if (isSuccess && data.error) {
    dispatch(deleteItem(id));
    return null;
  }

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
