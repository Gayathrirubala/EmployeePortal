import { CanActivateChildFn, CanActivateFn,Router } from '@angular/router';
import { inject } from '@angular/core';
import { AuthService } from '../services/auth.service';


const checkLogin=()=>{
  const auth = inject(AuthService);
  const router = inject(Router);

  if(auth.isLoggedIn()){
    return true;
  }

  router.navigate(['/login']);
  return false;
}
export const authGuard: CanActivateFn =()=> checkLogin();
export const authChildGuard: CanActivateChildFn=()=> checkLogin();