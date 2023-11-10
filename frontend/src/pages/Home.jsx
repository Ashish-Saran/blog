import React from "react";
import Navbar from "../components/Navbar";
import Loader from "../components/Loader";
import Pagination from "../components/Pagination";
import Category from "../components/Category";
import Footer from "../components/Footer";
import Posts from "../components/Posts";
import { useGlobalContext } from "../Context";
import "../css/homepage.css";

const Home = () => {
  const { isLoading } = useGlobalContext();

  return (
    <div className="mainContainer">
      <header className="pageHeader">
        <Navbar />
      </header>
      <Category />
      {isLoading ? (
        <div className="pageLoading">
          <Loader />
        </div>
      ) : null}
      <main className="pageBody">
        <Posts />
      </main>
      <Pagination />
      <footer className="pageFooter">
        <Footer />
      </footer>
    </div>
  );
};

export default Home;
