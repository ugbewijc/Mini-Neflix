import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';
import { MoviesDataService } from '../core/movies-data.service';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  private apiurl: string;

  headers = new HttpHeaders().set('Content-Type', 'application/json').set('Accept', 'application/json');
  perfop = {
    headers: this.headers
  };

  constructor(private http: HttpClient) {
    this.apiurl = 'api/moviesData';
  }

  getMovies(): Observable<MoviesDataService[]> {
    return this.http.get<MoviesDataService[]>(this.apiurl)
  }

  getMoviesById(id: string): Observable<MoviesDataService> {
    const url = `${this.apiurl}/${id}`;
    return this.http.get<MoviesDataService>(url);
  }
  
}
