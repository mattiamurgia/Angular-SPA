import { Component, inject } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MovieDiscover } from 'src/app/models/MovieDiscover';
import { FindMovieService } from 'src/app/services/findMovie/find-movie.service';

@Component({
  selector: 'app-listing-component',
  templateUrl: './listing-component.component.html',
  styleUrls: ['./listing-component.component.scss']
})
export class ListingComponentComponent {

  http = inject(FindMovieService)
  inputText : FormControl = new FormControl();
  movies !: MovieDiscover[]

  callApi() {
    console.log(this.inputText.value)
    return this.http
    .getDataSearching(this.inputText.value)
    .subscribe(
      (el) => (
        this.movies = el.results
          )
        )
  }

}
