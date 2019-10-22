import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MoviesComponent } from './movies/movies.component';
import { FavouritesComponent } from './favourites/favourites.component'
import { PageNotFoundComponent } from './page-not-found/page-not-found.component'

const routes: Routes = [
  { path: '', component: MoviesComponent, data: { title: 'Home Mini Netflix' }
},
  {path: 'favourite', component: FavouritesComponent
  },
  { path: '**', component: PageNotFoundComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
