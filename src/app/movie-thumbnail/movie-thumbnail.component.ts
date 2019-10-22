import { Component, OnInit, Input, EventEmitter , Output } from '@angular/core';
import { FavouritesService } from '../core/favourites.service';

import { FilterPipe } from 'ngx-filter-pipe';

@Component({
  selector: 'movie-thumbnail',
  templateUrl: './movie-thumbnail.component.html',
  styleUrls: ['./movie-thumbnail.component.css']
})
export class MovieThumbnailComponent implements OnInit {

  @Input() movieList:any
  @Output() mDetails = new EventEmitter();

  movieFilter:any =  { title: '' };;

  constructor(private favouritesService : FavouritesService, private filterPipe: FilterPipe ) {
    filterPipe.transform(this.movieList, { title: '' });
  }

  ngOnInit() {}

  addFavouriteMovie(movieId){
    this.favouritesService.addFavouriteMovie(movieId);
  }

  removeFavouriteMovie(movieId){
    this.favouritesService.removeFavouriteMovie(movieId);
  }

  checkFavouriteMovie(movieId){
    return this.favouritesService.checkFavouriteMovie(movieId);
  }



}
