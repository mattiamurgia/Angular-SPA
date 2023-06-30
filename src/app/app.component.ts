import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoaderService } from './services/loaderService/loader.service';
import { Observable, ObservedValueOf } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  urlActive = inject(Router)
  loader = inject(LoaderService)

  checkRoute = () => {
    const currentRoute = this.urlActive.url;
    return currentRoute !== "/login"
    }
  
  title = 'Angular-SPA';
}
