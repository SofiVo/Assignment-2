import React, { useRef } from "react";

import classes from "./MovieType.module.css";

const MovieType = (props) => {
  const handleScroll = (e) => {
    const container = scrollRef.current;
    const containerScrollPosition = scrollRef.current.scrollLeft;

    container.scrollTo({
      top: 0,
      left: containerScrollPosition + e.deltaY,
    });
  };

  const scrollRef = useRef(null);

  return (
    <ul className={classes["movies-list"]}>
      <h2>{props.title}</h2>
      <li
        className={`${
          !props.title
            ? classes.movies__original
            : classes.movies__list_row_styles
        }`}
        onWheel={handleScroll}
        ref={scrollRef}
      >
        {props.movies &&
          props.movies.map((movie) => (
            <img
              key={movie.key}
              src={`${"https://www.themoviedb.org/t/p/original"}${movie.image}`}
              alt=""
              className={`${!movie.image ? classes.hide_picture : ""}`}
              onClick={props.onShow}
            />
          ))}
      </li>
    </ul>
  );
};

export default MovieType;
