import React from "react";
import NavBar from "../../components/NavBar";
import Banner from "../../components/Banner";
import MoviesList from "../../components/MoviesList";

function Browse() {
  return (
    <div className="app">
      <NavBar />
      <Banner />
      <MoviesList />
    </div>
  );
}

export default Browse;
