import { Component, OnInit, inject } from '@angular/core';
import { MovieDiscover } from 'src/app/models/MovieDiscover';
import { CardDetailService } from 'src/app/services/detailService/card-detail.service';
@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent implements OnInit {
  cardDetail = inject(CardDetailService);
  cardObtained!: MovieDiscover;

  ngOnInit() {
    this.cardDetail.getMovie().subscribe((item) => (this.cardObtained = item));
  }

  getMovieDetail = () => {
    return this.cardObtained;
  };
}
