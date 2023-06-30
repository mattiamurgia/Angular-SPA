import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { HomeComponent } from './components/home/home.component';
import { ListingComponentComponent } from './components/listing-component/listing-component.component';
import { FavoritesComponent } from './components/favorites/favorites.component';
import { authGuardGuard } from './gateGuardian/auth-guard.guard';
import { DetailComponent } from './components/detail/detail.component';
import { LoaderComponent } from './components/loader/loader.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path: 'login',
    component: LoginComponent,
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent,
    pathMatch: 'full',
    canActivate: [authGuardGuard],
  },
  {
    path: 'lists',
    component: ListingComponentComponent,
    pathMatch: 'full',
    canActivate: [authGuardGuard],
  },
  {
    path: 'favorites',
    component: FavoritesComponent,
    pathMatch: 'full',
    canActivate: [authGuardGuard],
  },

  {
    path: 'home/movies/:id',
    component: DetailComponent,
    pathMatch: 'full',
    canActivate: [authGuardGuard],
  },
  {
    path: '**',
    component: PageNotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
