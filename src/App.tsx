import React from "react";
import "./App.css";
import { Store } from "./store";
import { Link } from "@reach/router";

// export default function App(){
//   return(
//     <h1>Hlo World</h1>
//   );
// }

export default function App(props: any): JSX.Element {
  const { state } = React.useContext(Store);

  return (
    <React.Fragment>
      <header className="header">
        <div>
          <h1>Rick And Morty</h1>
          <p>Pick your fav episode!!</p>
        </div>
        <div id="favourites">
          <Link to="/">Home</Link>
          <Link to="/faves"> Favourite(s): {state.favourites.length} </Link>
        </div>
      </header>
      {props.children}
    </React.Fragment>
  );
}