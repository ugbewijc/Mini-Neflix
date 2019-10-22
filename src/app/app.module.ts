import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule }    from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import {NgxWebstorageModule} from 'ngx-webstorage';// session storage
import { FilterPipeModule } from 'ngx-filter-pipe';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { FavouritesService } from './core/favourites.service';


import { AppComponent } from './app.component';
import { NarBarComponent } from './nar-bar/nar-bar.component';
import { MoviesComponent } from './movies/movies.component';

import { MoviesService } from './shared/movies.service';
import { MoviesDataService } from './core/movies-data.service';

import { FavouritesComponent } from './favourites/favourites.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { MovieThumbnailComponent } from './movie-thumbnail/movie-thumbnail.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component'

@NgModule({
  declarations: [
    AppComponent,
    NarBarComponent,
    MoviesComponent,
    FavouritesComponent,
    PageNotFoundComponent,
    MovieThumbnailComponent,
    MovieDetailComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FilterPipeModule,
    FormsModule,
    NgxWebstorageModule.forRoot(),
    HttpClientInMemoryWebApiModule.forRoot(MoviesDataService)
  ],
  providers: [MoviesService,
    MoviesDataService,
    FavouritesService
        ],
  bootstrap: [AppComponent]
})
export class AppModule { }
