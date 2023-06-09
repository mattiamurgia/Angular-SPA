import { Component, Input, inject } from '@angular/core';
import { MovieDiscover } from 'src/app/models/MovieDiscover';
import { Card } from 'src/app/models/Card';
import { CardDetailService } from 'src/app/services/detailService/card-detail.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {

  cardDetail = inject(CardDetailService)
  router = inject(Router)

  @Input() movieCard !: MovieDiscover;
  @Input() idCard !: number;

  setMovie = () => {
    this.cardDetail.movieToPass.next(this.movieCard)
    this.router.navigate(['home/movies/', this.idCard])
  }

/*   @Input() card!: Card; */
}
