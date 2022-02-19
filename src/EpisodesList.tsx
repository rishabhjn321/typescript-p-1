import React from 'react'
import { IEpisodes } from './interfaces';

export default function EpisodesList(props: any): JSX.Element[] {
    
    const {episodes, toggleFavAction, favourites, store} = props
    const {state, dispatch} = store

     return episodes.map((episode: IEpisodes) => {
        return (
          <section key={episode.id} className="episode-box">
            <img
              src={episode.image}
              alt={`Rick & Morty ${episode.name}`}
            />
            <div>{episode.name}</div>
            <section style = {{display: 'flex', justifyContent: 'space-between'}}>
              <div>
                Season: {episode.season} Number: {episode.number}
              </div>
              <button type="button" onClick={() => toggleFavAction(state, dispatch ,episode)}>
                {favourites.find((fav:IEpisodes) => fav.id === episode.id)? 'Unfav' : 'Fav'}
              </button>
            </section>
          </section>
        );
      })
}