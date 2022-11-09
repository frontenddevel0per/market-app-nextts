import type { NextPage } from "next";
import Head from "next/head";
import Bag from "../components/bag/bag.component";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Bag</title>
        <meta
          name="keywords"
          content="интернет магазин корзина, корзина магазин"
        />
      </Head>
      <Bag />
    </>
  );
};

export default Home;
