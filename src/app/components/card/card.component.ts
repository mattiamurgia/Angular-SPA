import { Component, Input, OnInit, inject } from '@angular/core';
import { MovieDiscover } from 'src/app/models/MovieDiscover';
import { CardDetailService } from 'src/app/services/detailService/card-detail.service';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {

  cardDetail = inject(CardDetailService);
  router = inject(Router);

  @Input() movieCard!: MovieDiscover
  @Input() idCard!: number
  cardNumber !: string

  setMovie = () => {
    this.cardDetail.movieToPass.next(this.movieCard);
    this.router.navigate(['home/movies/', this.idCard]);
  };
}
