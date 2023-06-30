import { AfterViewChecked, AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild, inject } from '@angular/core';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';
import { MovieDiscover } from 'src/app/models/MovieDiscover';
import { CardDetailService } from 'src/app/services/detailService/card-detail.service';

@Component({
  selector: 'app-card-details',
  templateUrl: './card-details.component.html',
  styleUrls: ['./card-details.component.scss']
})
export class CardDetailsComponent implements OnInit,AfterViewInit,AfterViewChecked {
  
  cardDetail = inject(CardDetailService)
  router = inject(Router)
  
  @Input() movieCard !: MovieDiscover;
  @Input() idCard !: number;
  @Input() cardNumber !: string;

  ngOnInit(): void {
/*     this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) 
        window.scrollTo(0, 0) }) */
        /* window.scrollTo(0, 0)  */
      }

  ngAfterViewInit(): void {
    /* this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        window.scrollTo(0, 0) }
      }) */
      window.scrollTo(0, 0) 
  }

  ngAfterViewChecked(): void {
        /* window.scrollTo(0, 0)  */
  }
}
