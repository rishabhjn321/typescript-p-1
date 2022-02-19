import { IAction, IEpisodes, IState } from "./interfaces";

export const fetchDataAction = async (dispatch: any) => {
    const URL ="https://api.tvmaze.com/singlesearch/shows?q=girls&embed=episodes";
    const data = await fetch(URL);
    const dataJSON = await data.json();
    console.log(dataJSON)
    return dispatch({
      type: "FETCH_DATA",
      payload: dataJSON._embedded.episodes
    });
  };


export const toggleFavAction = (state:IState, dispatch:any ,episode: IEpisodes | any): IAction => {
    const episodeInFav = state.favourites.includes(episode)
    let dispactchObj = {
      type: 'ADD_FAV',
      payload: episode
    }
    
    if(episodeInFav){
      const favWithoutEpisode = state.favourites.filter((fav: IEpisodes) => fav.id !== episode.id)
      dispactchObj = {
        type: 'REMOVE_FAV',
        payload: favWithoutEpisode
      }
    }
    
    return dispatch(dispactchObj);
  }