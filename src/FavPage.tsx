import React from "react";
import { toggleFavAction } from "./Actions";
import { IEpisodeProps } from "./interfaces";
import { Store } from "./store";

const EpisodeList = React.lazy<any>(() => import('./EpisodesList'))

export default function FavPage(): JSX.Element {
  const { state, dispatch } = React.useContext(Store);

  const props: IEpisodeProps = {
    episodes: state.favourites,
    store: {state, dispatch},
    toggleFavAction,
    favourites: state.favourites
  };

  return (
    <React.Suspense fallback={<div>loading...</div>}>
      <section className="episode-layout">
        <EpisodeList {...props} />
      </section>
    </React.Suspense>
  );
}