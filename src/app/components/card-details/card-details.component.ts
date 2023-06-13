import { Component, Input, inject } from '@angular/core';
import { MovieDiscover } from 'src/app/models/MovieDiscover';
import { CardDetailService } from 'src/app/services/detailService/card-detail.service';

@Component({
  selector: 'app-card-details',
  templateUrl: './card-details.component.html',
  styleUrls: ['./card-details.component.scss']
})
export class CardDetailsComponent {

  
  cardDetail = inject(CardDetailService)
  
  @Input() movieCard !: MovieDiscover;
  @Input() idCard !: number;

}
