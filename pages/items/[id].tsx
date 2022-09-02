import type { NextPage } from "next";
import { useRouter } from "next/router";
import Sidebag from "../../components/sidebag/sidebag.component";
import Sidebar from "../../components/sidebar/sidebar.component";
import Item from "../../components/item/item.component";

import DB from "../../resources/DB/DB.json";

const Home: NextPage = () => {
  let Id: number | null = null;
  const { data } = DB;
  const router = useRouter();
  const { id } = router.query;
  if (id !== undefined) {
    Id = Number(id);
  }

  return (
    <div className="main-page">
      <Sidebar />
      {Id !== null ? (
        <Item
          id={data[Id].id}
          title={data[Id].title}
          subtitle={data[Id].subtitle}
          rating={data[Id].rating}
          shortdesc={data[Id].shortdesc}
          desc={data[Id].desc}
          price={data[Id].price}
          src1={data[Id].src1}
          src2={data[Id].src2}
          src3={data[Id].src3}
        />
      ) : null}
      <Sidebag />
    </div>
  );
};

export default Home;
