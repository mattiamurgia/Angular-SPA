import { Component, OnInit, inject } from '@angular/core';
import { User } from 'src/app/models/User';
import { LocalService } from 'src/app/services/localService/local-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  service = inject(LocalService);
  data!:User;

  ngOnInit()
  {
    this.data = this.service.getUser();
    console.log('Sono login ⛔️', this.data);
  }
}
