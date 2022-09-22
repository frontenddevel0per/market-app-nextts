import type { NextPage } from "next";
import Head from "next/head";
import Catalog from "../components/catalog/catalog.component";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Catalog</title>
      </Head>
      <Catalog />
    </>
  );
};

export default Home;
