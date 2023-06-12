import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  urlActive = inject(Router)

  checkRoute = () => {
    const currentRoute = this.urlActive.url;
    currentRoute !== "/login" ? true : false
    }
  
  title = 'Angular-SPA';
}
