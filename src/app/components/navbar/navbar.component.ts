import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LocalService } from 'src/app/services/localService/local-service.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})

export class NavbarComponent {
  /* Questa parte la utilizziamo per far comparire o scomparire lìimput al click del bottone di ricerca */
  showInput = false;
  searchQuery!: string;

  toggleInput() {
    this.showInput = !this.showInput;
    if (!this.showInput) {
      this.searchQuery = ''; // Resettiamo la query di ricerca quando viene nascosta l'input
    }
  }
/* ------------------------------------------------------------------------------------------------------ */
  service = inject(LocalService);

  userName = JSON.stringify(this.service.getUser());

}
