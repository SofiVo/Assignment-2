import React, { Fragment } from "react";
import { ReactDOM } from "react";

import classes from "./MovieDetail.module.css";

const MovieDetail = () => {
  return (
    <Fragment>
      <div>
        <h2>Name</h2>
        <p>Date</p>
        <p>Vote</p>
        <p>Description</p>
      </div>
    </Fragment>
  );
};

export default MovieDetail;
