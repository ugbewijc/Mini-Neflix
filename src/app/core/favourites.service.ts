import { Injectable } from '@angular/core';
import {LocalStorageService, SessionStorageService} from 'ngx-webstorage';


@Injectable({
  providedIn: 'root'
})
export class FavouritesService {
  favouriteMovie: any[]= [];

  constructor(private sessionSt:SessionStorageService) {
  }

  getFavouriteMovieList(){
    return JSON.parse(this.sessionSt.retrieve('favouriteMovie'))
  }

  saveFavouriteMovieList(list){
    this.sessionSt.store('favouriteMovie', JSON.stringify(list))
  }

  clearFavouriteMovieList(){
    this.sessionSt.clear('favouriteMovie');
  }

  addFavouriteMovie(movieID){
    let movieInList = this.getFavouriteMovieList();
    if(movieInList){
      this.favouriteMovie= movieInList;
      this.favouriteMovie.push(movieID);
      this.saveFavouriteMovieList(this.favouriteMovie)
    }else{
      this.favouriteMovie.push(movieID);
      this.saveFavouriteMovieList(this.favouriteMovie)
    }
  }

  removeFavouriteMovie(movieID){
    let movieInList = this.getFavouriteMovieList();
    let indx = movieInList.indexOf(movieID);
    movieInList.splice(indx, 1);
    this.saveFavouriteMovieList(movieInList)
  }

  checkFavouriteMovie(movieID){
    let movieInList = this.getFavouriteMovieList();
    if(!movieInList)
    return false
    return (movieInList.indexOf(movieID) > -1)
  }


}
