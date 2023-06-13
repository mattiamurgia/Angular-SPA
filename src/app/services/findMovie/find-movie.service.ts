import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

const api_key = "3dd24b8a6a5ad0320dc5b8b5ec38c4ef"

@Injectable({
  providedIn: 'root'
})
export class FindMovieService {

  http = inject(HttpClient)

  getDataSearching = (movieToFind: string) : Observable<any> => {
    const url = `https://api.themoviedb.org/3/search/movie?query=${movieToFind}&include_adult=false&language=en-US&page=1&api_key=${api_key}`
    return this.http.get<any>(url)
  }

}
