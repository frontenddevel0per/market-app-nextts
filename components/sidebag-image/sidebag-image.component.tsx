import { FC } from "react";
import Image from "next/future/image";
import { imageLoader } from "../helpers";
import { IMAGE_SIZE } from "../shared.constant";
import Link from "next/link";
import { SidebagImageProps } from "./sidebag-image.types";

const SidebagImage: FC<SidebagImageProps> = ({ id, title, src }) => {
  return (
    <>
      <Link href={`/items/${id}`}>
        <Image
          loader={imageLoader}
          src={src}
          alt={title}
          width={IMAGE_SIZE}
          height={IMAGE_SIZE}
        />
      </Link>
    </>
  );
};

export default SidebagImage;
