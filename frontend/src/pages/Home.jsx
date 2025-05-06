import React from "react";
import Navbar from "../components/Navbar";
import Loader from "../components/Loader";
import Pagination from "../components/Pagination";
import Category from "../components/Category";
import Footer from "../components/Footer";
import Posts from "../components/Posts";
import { useGlobalContext } from "../Context";
import "../css/homepage.css";
import Header from "../components/Header";

const Home = () => {
  const { isLoading } = useGlobalContext();

  return (
    <div className="mainContainer">
      <div className="pageHeader">
        <Header />
      </div>
      {isLoading ? (
        <div className="pageLoading">
          <Loader />
        </div>
      ) : null}
      <div className="pageBody">
        <Category />
        <Posts />
      </div>
      {/* <div className="pagination">
        <Pagination />
      </div> */}
      <div className="pageFooter">
        <Footer />
      </div>
    </div>
  );
};

export default Home;
