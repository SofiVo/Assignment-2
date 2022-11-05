import React, { useRef } from "react";
import MovieDetail from "./MovieDetail";

import classes from "./MoviesList.module.css";

const MoviesList = (props) => {
  const handleScroll = (e) => {
    const container = scrollRef.current;
    const containerScrollPosition = scrollRef.current.scrollLeft;

    container.scrollTo({
      top: 0,
      left: containerScrollPosition + e.deltaY,
    });
  };

  const scrollRef = useRef(null);

  const handleScrollTrending = (e) => {
    const container = scrollRefTrending.current;
    const containerScrollPosition = scrollRefTrending.current.scrollLeft;

    container.scrollTo({
      top: 0,
      left: containerScrollPosition + e.deltaY,
    });
  };

  const scrollRefTrending = useRef(null);

  const handleScrollTopRated = (e) => {
    const container = scrollRefTopRated.current;
    const containerScrollPosition = scrollRefTopRated.current.scrollLeft;

    container.scrollTo({
      top: 0,
      left: containerScrollPosition + e.deltaY,
    });
  };

  const scrollRefTopRated = useRef(null);

  const handleScrollAction = (e) => {
    const container = scrollRefAction.current;
    const containerScrollPosition = scrollRefAction.current.scrollLeft;

    container.scrollTo({
      top: 0,
      left: containerScrollPosition + e.deltaY,
    });
  };

  const scrollRefAction = useRef(null);

  const handleScrollComedies = (e) => {
    const container = scrollRefComedies.current;
    const containerScrollPosition = scrollRefComedies.current.scrollLeft;

    container.scrollTo({
      top: 0,
      left: containerScrollPosition + e.deltaY,
    });
  };

  const scrollRefComedies = useRef(null);

  const handleScrollHorror = (e) => {
    const container = scrollRefHorror.current;
    const containerScrollPosition = scrollRefHorror.current.scrollLeft;

    container.scrollTo({
      top: 0,
      left: containerScrollPosition + e.deltaY,
    });
  };

  const scrollRefHorror = useRef(null);

  const handleScrollRomance = (e) => {
    const container = scrollRefRomance.current;
    const containerScrollPosition = scrollRefRomance.current.scrollLeft;

    container.scrollTo({
      top: 0,
      left: containerScrollPosition + e.deltaY,
    });
  };

  const scrollRefRomance = useRef(null);

  const handleScrollDocumentaries = (e) => {
    const container = scrollRefDocumentaries.current;
    const containerScrollPosition = scrollRefDocumentaries.current.scrollLeft;

    container.scrollTo({
      top: 0,
      left: containerScrollPosition + e.deltaY,
    });
  };

  const scrollRefDocumentaries = useRef(null);

  const movieHandler = () => {
    return <MovieDetail />;
  };

  return (
    <ul className={classes["movies-list"]}>
      <li>
        <h2>Original</h2>
        <div
          className={classes.movies__list_row_styles}
          onWheel={handleScroll}
          ref={scrollRef}
        >
          {props.movies &&
            props.movies.map((movie) => (
              <img
                src={`${"https://www.themoviedb.org/t/p/w600_and_h900_bestv2"}${
                  movie.image
                }`}
                onClick={props.movieHandler}
                alt=""
                className={classes["hover-zoom"]}
              />
            ))}
        </div>
      </li>
      <li>
        <h2>Xu hướng</h2>
        <div
          className={classes.movies__list_row_styles}
          onWheel={handleScrollTrending}
          ref={scrollRefTrending}
        >
          {props.trendingMovies &&
            props.trendingMovies.map((trending) => (
              <img
                src={`${"https://www.themoviedb.org/t/p/w600_and_h900_bestv2"}${
                  trending.image
                }`}
                alt=""
                className={classes["hover-zoom"]}
              />
            ))}
        </div>
      </li>
      <li>
        <h2>Xếp hạng cao</h2>
        <div
          className={classes.movies__list_row_styles}
          onWheel={handleScrollTopRated}
          ref={scrollRefTopRated}
        >
          {props.topRated &&
            props.topRated.map((movie) => (
              <img
                src={`${"https://www.themoviedb.org/t/p/w600_and_h900_bestv2"}${
                  movie.image
                }`}
                alt=""
                className={classes["hover-zoom"]}
              />
            ))}
        </div>
      </li>
      <li>
        <h2>Hành động</h2>
        <div
          className={classes.movies__list_row_styles}
          onWheel={handleScrollAction}
          ref={scrollRefAction}
        >
          {props.actionMovies &&
            props.actionMovies.map((movie) => (
              <img
                src={`${"https://www.themoviedb.org/t/p/w600_and_h900_bestv2"}${
                  movie.image
                }`}
                alt=""
                className={classes["hover-zoom"]}
              />
            ))}
        </div>
      </li>
      <li>
        <h2>Hài</h2>
        <div
          className={classes.movies__list_row_styles}
          onWheel={handleScrollComedies}
          ref={scrollRefComedies}
        >
          {props.comedies &&
            props.comedies.map((movie) => (
              <img
                src={`${"https://www.themoviedb.org/t/p/w600_and_h900_bestv2"}${
                  movie.image
                }`}
                alt=""
                className={classes["hover-zoom"]}
              />
            ))}
        </div>
      </li>
      <li>
        <h2>Kinh dị</h2>
        <div
          className={classes.movies__list_row_styles}
          onWheel={handleScrollHorror}
          ref={scrollRefHorror}
        >
          {props.horror &&
            props.horror.map((movie) => (
              <img
                src={`${"https://www.themoviedb.org/t/p/w600_and_h900_bestv2"}${
                  movie.image
                }`}
                alt=""
                className={classes["hover-zoom"]}
              />
            ))}
        </div>
      </li>
      <li>
        <h2>Lãng mạn</h2>
        <div
          className={classes.movies__list_row_styles}
          onWheel={handleScrollRomance}
          ref={scrollRefRomance}
        >
          {props.romance &&
            props.romance.map((movie) => (
              <img
                src={`${"https://www.themoviedb.org/t/p/w600_and_h900_bestv2"}${
                  movie.image
                }`}
                alt=""
                className={classes["hover-zoom"]}
              />
            ))}
        </div>
      </li>
      <li>
        <h2>Tài liệu</h2>
        <div
          className={classes.movies__list_row_styles}
          onWheel={handleScrollDocumentaries}
          ref={scrollRefDocumentaries}
        >
          {props.documentaries &&
            props.documentaries.map((movie) => (
              <img
                src={`${"https://www.themoviedb.org/t/p/w600_and_h900_bestv2"}${
                  movie.image
                }`}
                alt=""
                className={classes["hover-zoom"]}
              />
            ))}
        </div>
      </li>
    </ul>
  );
};

export default MoviesList;
