import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieDiscover } from 'src/app/models/MovieDiscover';
import { MoviesCallApiService } from 'src/app/services/movieService/movies-call-api.service';
@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit{


  cardDetail = inject(MoviesCallApiService)
  cardObtained !: MovieDiscover;

  ngOnInit() {
    this.cardDetail.getData().subscribe( item => this.cardObtained = item)
  }

  getMovieDetail = () => {
    return this.cardObtained
  }

}
