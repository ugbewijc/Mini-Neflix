import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../shared/movies.service'

@Component({
  templateUrl: './movies.component.html'
})
export class MoviesComponent implements OnInit {

  movies:any
  movieDetails:any

  constructor(private moviesService : MoviesService) { }

  ngOnInit() {
    this.fecthMovies();
  }

  fecthMovies(){
    this.moviesService.getMovies().subscribe(data => {
      this.movies=data;
    });
  }

}
