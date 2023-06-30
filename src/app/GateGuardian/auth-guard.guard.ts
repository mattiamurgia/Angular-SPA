import { Injectable, inject } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, CanActivate, CanActivateFn, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { isLoggedIn } from '../services/guardService/checklogin';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class authGuardGuard {

  constructor(private router : Router) {}


  canActivate: CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> =>
   {
/*     if(this.router.url === '/login') 
        {
          this.router.navigate(["login"])
          return true
        } */
    if (isLoggedIn() && this.router.url === "/login") {
      console.log('isLoggedIn()', isLoggedIn());
      return true;
    } else {
      this.router.navigate(['login']);
      console.log("Vai al login")
      return false;
    }

  }
};
