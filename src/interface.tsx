/**
 *      Interfaces
 */

 export type Dispatch = React.Dispatch<IAction>

 export interface IEpisodes{
     airdate: string
     airstamp: string
     airtime: string
     id: number
     image: string
     name: string
     number: number
     rating: {average: number}
     runtime: number
     season: number
     summary: string
     type: string
     url: string
   }
   
 export interface IState {
     episodes: Array<IEpisodes>,
     favourites: Array<IEpisodes>
 };
 
 export interface IAction{
     type: string,
     payload: any
 };
 
 export interface IEpisodeProps {
     episodes: Array<IEpisodes>,
     store: {state:IState, dispatch: any}
     toggleFavAction: (state:IState, dispatch: any, episode: IEpisodes) => IAction,
     favourites: Array<IEpisodes> 
   }