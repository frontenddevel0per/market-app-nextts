import type { NextPage } from "next";
import { useRouter } from "next/router";
import Sidebag from "../../components/sidebag/sidebag.component";
import Sidebar from "../../components/sidebar/sidebar.component";
import Item from "../../components/item/item.component";
import { useQuery } from "react-query";

const ItemPage: NextPage = () => {
  let Id: number | null = null;
  const router = useRouter();
  const { id } = router.query;
  if (id !== undefined) {
    Id = Number(id);
  }

  const { data, isLoading, isError, isSuccess } = useQuery(`${Id}`, () =>
    fetch(`https://api.escuelajs.co/api/v1/products/${Id}`).then((res) =>
      res.json()
    )
  );

  return (
    <div className="main-page">
      <Sidebar />
      {Id !== null && isSuccess ? (
        <Item
          id={data.id}
          title={data.title}
          // rating={data.rating}
          desc={data.description}
          price={data.price}
          src1={data.images[0]}
          src2={data.images[1]}
          src3={data.images[2]}
        />
      ) : null}
      <Sidebag />
    </div>
  );
};

export default ItemPage;
