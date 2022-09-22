import type { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import Item from "../../components/item/item.component";
import { useItemApi } from "../../components/shared.api";

const ItemPage: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;

  const { data, isSuccess } = useItemApi(Number(id));

  return (
    <>
      <Head>
        <title>{data?.title}</title>
      </Head>
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
