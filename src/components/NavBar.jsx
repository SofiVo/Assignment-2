import React, { Fragment, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import SearchIcon from "../assets/SearchIcon";

import classes from "./NavBar.module.css";

const NavBar = (props) => {
  const [scroll, setScroll] = useState(true);
  const navigateSearchPage = useNavigate();

  useEffect(() => {
    window.addEventListener("scroll", changeColor);
  });

  const changeColor = () => {
    if (window.scrollY > 100) {
      setScroll(false);
    } else {
      setScroll(true);
    }
  };

  const redirectSearch = () => {
    navigateSearchPage("/search");
  };

  return (
    <Fragment>
      <div>
        <div
          className={`${classes.navbar} ${
            scroll ? classes.transparent : classes.black
          }`}
        >
          <Link className={classes.navbar__links} to="/">
            Movie App
          </Link>
          <button onClick={redirectSearch} className={classes.navbar__search}>
            <span className={classes.search__icon}>
              <SearchIcon />
            </span>
          </button>
        </div>
      </div>
    </Fragment>
  );
};

export default NavBar;
