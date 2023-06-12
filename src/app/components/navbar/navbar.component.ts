import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LocalService } from 'src/app/services/localService/local-service.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {

  service = inject(LocalService);

  userName = JSON.stringify(this.service.getUser());

}
