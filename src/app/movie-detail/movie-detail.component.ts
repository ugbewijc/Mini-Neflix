import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'movie-details',
  templateUrl: './movie-detail.component.html'
})
export class MovieDetailComponent implements OnInit {
  details:any
  isModalActive: boolean
  constructor() { }

  ngOnInit() {
  }

  activateModal(isCondition:boolean){
    this.isModalActive = isCondition
  }

  displayMovieDetails(movie){
    this.activateModal(true)
    this.details = movie
  }

}
