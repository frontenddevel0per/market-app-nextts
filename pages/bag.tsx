import type { NextPage } from "next";
import Bag from "../components/bag/bag.component";
import Sidebag from "../components/sidebag/sidebag.component";
import Sidebar from "../components/sidebar/sidebar.component";

const Home: NextPage = () => {
  return (
    // <div className="main-page">
    //   <Sidebar />
    //   <Bag />
    //   <Sidebag />
    // </div>
    <>
      <Bag />
    </>
  );
};

export default Home;
