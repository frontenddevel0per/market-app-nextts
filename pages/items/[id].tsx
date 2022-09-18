import type { NextPage } from "next";
import { useRouter } from "next/router";
import Sidebag from "../../components/sidebag/sidebag.component";
import Sidebar from "../../components/sidebar/sidebar.component";
import Item from "../../components/item/item.component";
import { useItemApi } from "../../components/shared.api";

const ItemPage: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;

  const { data, isSuccess } = useItemApi(Number(id));

  return (
    // <div className="main-page">
    //   <Sidebar />
    //   {id !== null && isSuccess ? (
    //     <Item
    //       id={data.id}
    //       title={data.title}
    //       desc={data.description}
    //       price={data.price}
    //       src={data.images}
    //     />
    //   ) : null}
    //   <Sidebag />
    // </div>
    <>
      {id !== null && isSuccess ? (
        <Item
          id={data.id}
          title={data.title}
          desc={data.description}
          price={data.price}
          src={data.images}
        />
      ) : null}
    </>
  );
};

export default ItemPage;
