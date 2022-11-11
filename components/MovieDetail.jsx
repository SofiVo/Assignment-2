import React from "react";

import ModalDetail from "./ModalDetail";

import classes from "./MovieDetail.module.css";

const MovieDetail = (props) => {
  console.log(props.movies);

  return (
    <ModalDetail>
      <p className={classes.close_details}>X</p>
      <div className={classes.content_details}>
        <h2>{props.movies}</h2>
        <h3>Release Date: </h3>
        <h3>Vote: /10</h3>
        <p></p>
      </div>
      <div className={classes.video_details}>
        <iframe
          width="100%"
          height="550"
          src="https://www.youtube.com/embed/QZI1V6aLIco"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    </ModalDetail>
  );
};

export default MovieDetail;
