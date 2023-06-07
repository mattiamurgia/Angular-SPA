import { Component, Input } from '@angular/core';
import { MovieDiscover } from 'src/app/models/MovieDiscover';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {

  @Input() movieCard !: MovieDiscover;

}
