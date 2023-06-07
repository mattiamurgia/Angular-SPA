import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const api_key = "3dd24b8a6a5ad0320dc5b8b5ec38c4ef"
const url = `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&api_key=${api_key}`

@Injectable({
  providedIn: 'root'
})

export class MoviesCallApiService {

  http = inject(HttpClient)

  getData = () : Observable<any> => {
    return this.http.get<any>(url)
  }

}
