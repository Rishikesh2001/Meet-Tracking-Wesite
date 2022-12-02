import React from 'react'
import classes from './Layout.module.css'
import MainMavigation from './MainNavigation';

function Layout(props){
  return (
    <div>
      <MainMavigation />
      <main className={classes.main}>
         {props.children}
      </main>
    </div>
  );
}

export default Layout;