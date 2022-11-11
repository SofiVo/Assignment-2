import React from "react";
import { useEffect, useState } from "react";
import MovieType from "../MovieType";

const Original = (props) => {
  const [data, setData] = useState();

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/discover/tv?api_key=6047771aaf92f9603f114fd32035f2ce&with_network=123"
    )
      .then((res) => {
        if (!res.ok) {
          throw new Error(
            `This is an HTTP error: This status is ${res.status}`
          );
        }
        return res.json();
      })
      .then((data) => {
        const receivedMoviesList = data.results;
        const loadedMovies = [];
        for (let i = 0; i < receivedMoviesList.length; i++) {
          loadedMovies.push({
            key: receivedMoviesList[i].id,
            image: receivedMoviesList[i].poster_path,
            name: receivedMoviesList[i].original_title,
            release: receivedMoviesList[i].release_date,
            vote: receivedMoviesList[i].vote_average,
            overview: receivedMoviesList[i].overview,
          });
        }
        setData(loadedMovies);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return <MovieType movies={data} onShow={props.onShow} />;
};

export default Original;
