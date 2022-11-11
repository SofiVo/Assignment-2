import React from "react";

import classes from "./ModalDetail.module.css";

const ModalDetail = (props) => {
  return <div className={classes.modal_overlay}>{props.children}</div>;
};

export default ModalDetail;
