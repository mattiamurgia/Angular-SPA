import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { MovieDiscover } from 'src/app/models/MovieDiscover';
import { MoviesCallApiService } from 'src/app/services/movies-call-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private http : MoviesCallApiService) {}

  ngOnInit()  {
    this.getMovies();
  }
  
  movies : MovieDiscover[] = []

  getMovies = () => {
    return this.http.getData()
      .subscribe( el => (el.results.map((moviesFound : MovieDiscover) => this.movies.push(moviesFound)),
                          console.log(this.movies)))
  }

}
