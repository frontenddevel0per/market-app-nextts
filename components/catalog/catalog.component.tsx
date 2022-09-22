import { FC, useEffect, useState } from "react";
import Button from "@mui/material/Button";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import CatalogItem from "../catalog-item/catalog-item.component";
import { useFetchItemsApi } from "./catalog.api";
import { animateScroll as scroll } from "react-scroll";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { setCategory } from "../../redux/category/category-slice";
import { categoryValueSelector } from "../helpers";

type ItemProps = {
  id: number;
  title: string;
  price: number;
  category: string;
  description: string;
  images: string[];
};

const Catalog: FC = () => {
  const dispatch = useAppDispatch();
  const [counter, setCounter] = useState(1);
  const category = useAppSelector(categoryValueSelector);

  useEffect(() => {
    dispatch(setCategory(""));
  }, []);

  useEffect(() => {
    setCounter(1);
  }, [category]);

  const { data, isSuccess, isPreviousData } = useFetchItemsApi(
    category,
    counter
  );

  const catalogArr = data?.map((item: ItemProps) => {
    return (
      <CatalogItem
        key={item.id}
        id={item.id}
        title={item.title}
        description={item.description}
        src={item.images[0]}
        price={item.price}
      />
    );
  });

  return (
    <div className="catalog" id="catalog">
      <div className="catalog__list">{isSuccess && catalogArr}</div>
      <div className="catalog__navigation">
        <Button
          variant="outlined"
          startIcon={<NavigateBeforeIcon />}
          onClick={() => {
            setCounter(counter - 1);
            scroll.scrollTo(0, {
              duration: 500,
              smooth: true,
              containerId: "catalog",
            });
          }}
          disabled={counter < 2}
        >
          Back
        </Button>
        <p>{counter}</p>
        <Button
          variant="outlined"
          startIcon={<NavigateNextIcon />}
          onClick={() => {
            setCounter(counter + 1);
            scroll.scrollTo(0, {
              duration: 500,
              smooth: true,
              containerId: "catalog",
            });
          }}
          disabled={isPreviousData}
        >
          Next
        </Button>
      </div>
    </div>
  );
};

export default Catalog;
