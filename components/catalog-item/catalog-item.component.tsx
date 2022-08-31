import { FC } from "react";
import Image from "next/future/image";
import Link from "next/link";
import IconButton from "@mui/material/IconButton";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

import Jacket from '../../resources/img/inbornjacket1.png';

type CatalogItemProps = {
    id: number,
    title: string,
    subtitle: string,
    src: string,
    price: number
}

type LoaderFuncArgs = {src: string, width: number, quality?: number};

const myLoader = ({src, width, quality = 75}: LoaderFuncArgs) => {
    return `https://detkishop.com/upload/resize_cache/iblock${src}?w=${width}&q=${quality}`
}

const CatalogItem: FC<CatalogItemProps> = ({id, title, subtitle, src, price}) => {
    return (
        <Link href={`/items/${id}`}>
            <div className="catalog__list-item">
                <Image loader={myLoader} src={src} alt="jacket" width={250} height={250} />
                <h3>{title}</h3>
                <p>{subtitle}</p>
                <div className="catalog__list-item-bottom">
                    <h4>
                        $ {price}
                    </h4>
                    <IconButton>
                        <AddShoppingCartIcon htmlColor="white" />
                    </IconButton>
                </div>
            </div>
        </Link>
    )
}

export default CatalogItem;