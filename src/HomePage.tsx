import React from 'react'
import { fetchDataAction, toggleFavAction } from './Actions';
import { IAction, IEpisodeProps, IEpisodes } from './interfaces';
import { Store } from './store';

const EpisodeList = React.lazy<any>(() => import('./EpisodesList'))
 

export default function HomePage() {

    const {state, dispatch} = React.useContext(Store)

    React.useEffect(() => {
        state.episodes.length === 0 && fetchDataAction(dispatch);
      });


      const props: IEpisodeProps = {
        episodes: state.episodes,
        store: {state, dispatch},
        favourites: state.favourites,
        toggleFavAction
      }
    

    return (
        <React.Fragment>
            <React.Suspense fallback ={<div>loading...</div>}>
                <section className="episode-layout">
                <EpisodeList {...props}/>
                </section>
            </React.Suspense>
        </React.Fragment>
    )
}