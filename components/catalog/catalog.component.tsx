import { FC, useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import CatalogItem from "../catalog-item/catalog-item.component";
import { useQuery } from "react-query";
import { PAGINATION_STEP } from "./catalog.constant";

type ItemProps = {
  id: number;
  title: string;
  price: number;
  category: string;
  description: string;
  images: string[];
};

const Catalog: FC = () => {
  const [counter, setCounter] = useState(1);

  const fetchItems = (page: number) =>
    fetch(
      `https://api.escuelajs.co/api/v1/products?offset=${
        (page - 1) * PAGINATION_STEP
      }&limit=${PAGINATION_STEP}`
    ).then((res) => res.json());
  const { data, isLoading, isSuccess, isFetching, isPreviousData } = useQuery(
    ["catalogPages", counter],
    () => fetchItems(counter),
    {
      keepPreviousData: true,
    }
  );

  const catalogArr = data?.map((item: ItemProps) => {
    return (
      <CatalogItem
        key={item.id}
        id={item.id}
        title={item.title}
        src={item.images[0]}
        price={item.price}
      />
    );
  });

  return (
    <div className="catalog">
      <div className="catalog__searchbar">
        <TextField fullWidth label="Поиск по каталогу" variant="outlined" />
      </div>
      <div className="catalog__list">{isSuccess && catalogArr}</div>
      <div className="catalog__navigation">
        <Button
          variant="outlined"
          startIcon={<NavigateBeforeIcon />}
          onClick={() => {
            setCounter(counter - 1);
          }}
          disabled={counter < 2}
        >
          Back
        </Button>
        <p>{counter}</p>
        <Button
          variant="outlined"
          startIcon={<NavigateNextIcon />}
          onClick={() => setCounter(counter + 1)}
          disabled={isPreviousData}
        >
          Next
        </Button>
      </div>
    </div>
  );
};

export default Catalog;
