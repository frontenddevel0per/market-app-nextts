import { FC } from "react";
import TextField from "@mui/material/TextField";
import CatalogItem from "../catalog-item/catalog-item.component";

import DB from '../../resources/DB/DB.json'

const Catalog: FC = () => {
    const {data} = DB
    const catalogArr = data.map(item => {
        return (
            <CatalogItem key={item.id} id={item.id} title={item.title} subtitle={item.subtitle} src={item.src1} price={item.price} />
        )
    })

    return (
        <div className="catalog">
            <div className="catalog__searchbar">
                <TextField fullWidth label="Поиск по каталогу" variant="outlined" />
            </div>
            <div className="catalog__list">
                {catalogArr}
                {/* <CatalogItem/>
                <CatalogItem/>
                <CatalogItem/>
                <CatalogItem/>
                <CatalogItem/>
                <CatalogItem/> */}
            </div>
        </div>
    )
}

export default Catalog;