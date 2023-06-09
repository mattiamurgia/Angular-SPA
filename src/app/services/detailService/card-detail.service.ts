import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { MovieDiscover } from 'src/app/models/MovieDiscover';
import { __values } from 'tslib';

@Injectable({
  providedIn: 'root'
})
export class CardDetailService {

  movieToPass = new BehaviorSubject<MovieDiscover>({})

  sendMovie = (movie : MovieDiscover) => {
    this.movieToPass.next(movie)
  }
  
  getMovie = () => {
    return this.movieToPass.asObservable()
  }

}
