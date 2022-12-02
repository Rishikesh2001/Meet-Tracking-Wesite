import React from "react";
import { useContext } from "react";
import FavoriteContext from "../../store/favorites-context";
import Card from "../ui/Card";
import classes from "./MeetUpItem.module.css";

function MeetUpItem(props) {
  const favoriteContext = useContext(FavoriteContext);
  const isFavorite = favoriteContext.isFavorite(props.id);

  function toggleFavoriteHandler() {
   if(isFavorite) {
      favoriteContext.removeFavorite(props.id);
   }
   else {
      favoriteContext.addFavorite({
         id: props.id,
         title: props.title,
         address: props.address,
         description: props.description,
         image: props.image
      });
   }
  }

  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={props.image} alt={props.title} />
        </div>
        <div className={classes.content}>
          <h3>{props.title}</h3>
          <address>{props.address}</address>
          <p>{props.description}</p>
        </div>
        <div className={classes.actions}>
          <button onClick={toggleFavoriteHandler}>{isFavorite ? 'Remove from favorites': 'To favorites'}</button>
        </div>
      </Card>
    </li>
  );
}

export default MeetUpItem;
