import { Location } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { MovieDiscover } from 'src/app/models/MovieDiscover';
import { MoviesCallApiService } from 'src/app/services/movieService/movies-call-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(private http: MoviesCallApiService) {}

  location = inject(Location);

  ngOnInit() {
    this.getMovies();
  }

  movies: MovieDiscover[] = [];

  getMovies = () => {
    return this.http
      .getData()
      .subscribe(
        (el) => (
          el.results.map((moviesFound: MovieDiscover) =>
            this.movies.push(moviesFound)
          ),
          console.log(this.movies)
        )
      );
  };

  // funzione da associare a icon freccia indietro
  getback = () => {
    this.location.back();
  };


}
