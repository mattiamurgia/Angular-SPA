import { Location } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { Observable, Subject, map } from 'rxjs';
import { Card } from 'src/app/models/Card';
import { MovieDiscover } from 'src/app/models/MovieDiscover';
import { CardDetailService } from 'src/app/services/detailService/card-detail.service';
import { MoviesCallApiService } from 'src/app/services/movieService/movies-call-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(private http: MoviesCallApiService) {}
  // serve a fare il back con la pagina precedente
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

  /*
  dataCard: Card[] = [
    {
      img: 'https://picsum.photos/200/300',
      title: 'One',
      description: 'djwnwnjw',
    },
    {
      img: 'https://picsum.photos/200/300',
      title: 'Two',
      description: 'lorembbekje',
    },
    {
      img: 'https://picsum.photos/200/300',
      title: 'Three',
      description: 'ddjwjqqwkqw',
    },
    {
      img: 'https://picsum.photos/200/300',
      title: 'Four',
      description: 'dwwkiwdwid',
    },
  ];
 */
}
