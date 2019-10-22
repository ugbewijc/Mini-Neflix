import { Component, OnInit } from '@angular/core';
import { FavouritesService } from '../core/favourites.service';
import { MoviesService } from '../shared/movies.service'

@Component({
  selector: 'miniNetflix-favourites',
  templateUrl: './favourites.component.html'
})
export class FavouritesComponent implements OnInit {
  
  favouriteList:any[]=[]

  constructor(private favouritesService : FavouritesService, private movieService: MoviesService) { }

  ngOnInit() {
    this.fetchMovieData();
  }

  fetchMovieData(){
    let movieIndex = this.favouritesService.getFavouriteMovieList();
    if(movieIndex.length >= 1){
      for( let index of movieIndex){
        this.movieService.getMoviesById(index).subscribe(data => {
          this.favouriteList.push(data);
        });
      }
    }
  }
}
