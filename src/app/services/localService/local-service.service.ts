import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from 'src/app/models/User';

@Injectable({
  providedIn: 'root',
})
export class LocalService {
  constructor() {}

  private user = new BehaviorSubject<User>({ email: '', password: '' });


  public setUser(user:User) {
    this.user.next(user);
    localStorage.setItem('user', JSON.stringify(user));
  }

  public getUser()
  {
    const user = localStorage.getItem('user');
    if (user)
    {
      this.user.next(JSON.parse(user));
    }

    return this.user.getValue();
  }












}
