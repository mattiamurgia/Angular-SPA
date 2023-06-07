import { Component, Input } from '@angular/core';
import { MovieDiscover } from 'src/app/models/MovieDiscover';
import { Card } from 'src/app/models/Card';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {

  @Input() movieCard !: MovieDiscover;

  @Input() card!: Card;
}
