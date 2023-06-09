import { inject } from '@angular/core';
import { ActivatedRoute, CanActivateFn, Router } from '@angular/router';
import { isLoggedIn } from '../services/GuardService/checklogin';

export const authGuardGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  if (isLoggedIn()) {
    console.log('isLoggedIn()', isLoggedIn());

    return true;
  } else {
    router.navigate(['login']);
    return false;
  }
};
