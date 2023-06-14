import { ViewportScroller } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LocalService } from 'src/app/services/localService/local-service.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {

  service = inject(LocalService);
  router = inject(Router);
  scroller = inject(ViewportScroller);

  userName = JSON.stringify(this.service.getUser().nickname).replace(/"/g, '');

  showInput = false;
  searchQuery!: string;

  toggleInput() {
    this.showInput = !this.showInput;
    if (!this.showInput) {
      this.searchQuery = ''; // Resettiamo la query di ricerca quando viene nascosta l'input
    }
  }

  checkHomeRouter = () =>  {
    return this.router.url === "/home" || this.router.url === "/home#section1" || this.router.url === "/home#section2"
  }

  scrollToSection = (section:string) => {
    return this.scroller.scrollToAnchor(section)
  }

}
