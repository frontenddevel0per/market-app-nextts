import type { NextPage } from "next";
import Catalog from "../components/catalog/catalog.component";
import Sidebag from "../components/sidebag/sidebag.component";
import Sidebar from "../components/sidebar/sidebar.component";

const Home: NextPage = () => {
  return (
    <div className="main-page">
      <Sidebar />
      <Catalog />
      <Sidebag />
    </div>
  );
};

export default Home;
