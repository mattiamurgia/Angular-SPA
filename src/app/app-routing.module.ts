import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { HomeComponent } from './components/home/home.component';
import { ListingComponentComponent } from './components/listing-component/listing-component.component';
import { FavoritesComponent } from './components/favorites/favorites.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path: 'login',
    component: LoginComponent,
    pathMatch: 'full',
  },
  { path: 'home', component: HomeComponent, pathMatch: 'full' },
  { path: 'detail/:id', component: HomeComponent, pathMatch: 'full' },
  { path: 'lists', component: ListingComponentComponent, pathMatch: 'full' },
  { path: 'favorites', component: FavoritesComponent, pathMatch: 'full'},
  { path: '**', component: PageNotFoundComponent }
  // provo a fare il push
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
