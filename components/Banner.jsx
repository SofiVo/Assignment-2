import React, { Fragment, useEffect, useState } from "react";

import classes from "./Banner.module.css";

const Banner = () => {
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
      .then(
        (data) =>
          data.results[Math.floor(Math.random() * data.results.length - 1)]
      )
      .then((fetchedData) => {
        const bannerData = {
          key: fetchedData["id"],
          image: fetchedData["poster_path"],
          poster: fetchedData["backdrop_path"],
          name: fetchedData["name"],
          description: fetchedData["overview"],
        };
        setData(bannerData);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <Fragment>
      <div className={classes.banner_style}>
        {data && (
          <img
            src={`${"https://www.themoviedb.org/t/p/original"}${
              data.image ? data.poster : data.image
            }`}
            alt=""
          />
        )}
        <div className={classes.overlay__div}>
          {data && <h2>{data.name}</h2>}
          <button className={classes.btn__banner}>Play</button>
          <button className={classes.btn__banner}>My List</button>
          {data && <p>{data.description}</p>}
        </div>
      </div>
    </Fragment>
  );
};

export default Banner;
