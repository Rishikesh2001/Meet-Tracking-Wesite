import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import classes from "./MainNavigation.module.css";
import FavoriteContext from "../../store/favorites-context";

function MainMavigation() {
  const favoriteContext = useContext(FavoriteContext);

  return (
    <header className={classes.header}>
      <div className={classes.logo}>React Meetups</div>
      <nav>
        <ul>
          <li>
            <Link to="/">All Meetups </Link>
          </li>
          <li>
            <Link to="/new-meetup">New Meetup </Link>
          </li>
          <li>
            <Link to="/favorites">
              Favorite Meetups
              <span className={classes.badge}>{favoriteContext.total}</span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainMavigation;
