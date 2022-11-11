import React from "react";
import { Fragment, useState } from "react";

import Original from "./MoviesGenres/Original";
import TopRated from "./MoviesGenres/TopRated";
import Trending from "./MoviesGenres/Trending";
import ActionMovies from "./MoviesGenres/ActionMovies";
import Comedy from "./MoviesGenres/Comedy";
import Horror from "./MoviesGenres/Horror";
import Romantic from "./MoviesGenres/Romantic";
import Documentary from "./MoviesGenres/Documentary";
import MovieDetail from "./MovieDetail";

const MoviesList = (props) => {
  const [showDetails, setShowDetails] = useState(false);

  const showDetailsHandler = () => {
    setShowDetails(true);
  };

  return (
    <Fragment>
      <Original onShow={showDetailsHandler} movies={props.movies} />
      <Trending />
      <TopRated />
      <ActionMovies />
      <Comedy />
      <Horror />
      <Romantic />
      <Documentary />
      {showDetails && <MovieDetail />}
    </Fragment>
  );
};

export default MoviesList;
