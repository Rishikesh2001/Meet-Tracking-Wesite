import React from 'react';
import {useContext} from 'react';
import FavoriteContext from '../store/favorites-context';
import MeetUpList from '../components/meetups/MeetUpList';

function FavouriteMeetUpsPage(){
  const favoriteContext = useContext(FavoriteContext);

  let content;
  if (favoriteContext.total === 0) {
    content = <p>You got no favorites</p>
  } else {
    content = <MeetUpList meetups={favoriteContext.favorites}/>
  }

  return (
    <section>
      <h1>My favorites</h1>
      {content}
    </section>
  );
}

export default FavouriteMeetUpsPage;