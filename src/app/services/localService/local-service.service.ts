import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from 'src/app/models/User';


@Injectable({
  providedIn: 'root',
})
export class LocalService {
  private user = new BehaviorSubject<User>({ nickname: '', password: '', token:'' });

  setToken(token: string) {
    localStorage.setItem('tokenUser', token);
    return this.user.getValue().token;
  }

  public setUser(user: User) {
    this.user.next(user);
    localStorage.setItem('user', JSON.stringify(user));
  }

  public getUser() {
    const user = localStorage.getItem('user');
    if (user) {
      this.user.next(JSON.parse(user));
    }
    return this.user.getValue();
  }

}
