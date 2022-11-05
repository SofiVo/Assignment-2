import React from "react";
import NavBar from "../../components/NavBar";
import Banner from "../../components/Banner";
import MoviesList from "../../components/MoviesList";
import { useState } from "react";
import MovieDetail from "../../components/MovieDetail";

function Browse(props) {
  const [showDetails, setShowDetails] = useState(true);

  const movieHandler = () => {
    setShowDetails(false);
  };

  return (
    <div className="app">
      <NavBar />
      <Banner />
      <MoviesList
        movies={props.movies}
        trendingMovies={props.trendingMovies}
        topRated={props.topRated}
        actionMovies={props.actionMovies}
        comedies={props.comedies}
        horror={props.horror}
        romance={props.romanticMovies}
        documentaries={props.documentaries}
        onClick={movieHandler}
      />
      {!showDetails && <MovieDetail />}
    </div>
  );
}

export default Browse;
