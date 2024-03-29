import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CardComponent } from './components/card/card.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/login/login.component';
import { FormComponent } from './components/form/form.component';
import { DetailComponent } from './components/detail/detail.component';
import { FavoritesComponent } from './components/favorites/favorites.component';
import { ListingComponentComponent } from './components/listing-component/listing-component.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { CardDetailsComponent } from './components/card-details/card-details.component';
import { LoaderComponent } from './components/loader/loader.component';
import { LoaderInterceptor } from './services/interceptors/interceptor-loader.service';
import { LoaderService } from './services/loaderService/loader.service';
@NgModule({

  declarations: [
    AppComponent,
    LoginComponent,
    FormComponent,
    NavbarComponent,
    CardComponent,
    HomeComponent,
    FooterComponent,
    DetailComponent,
    FavoritesComponent,
    ListingComponentComponent,
    PageNotFoundComponent,
    CardDetailsComponent,
    LoaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true}],
  bootstrap: [AppComponent],
})
export class AppModule {}
