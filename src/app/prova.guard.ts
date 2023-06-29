import { Injectable, inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

class PermissionsService{
  constructor(private router: Router, public dialog: MatDialog){

  }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if(route.data['userLogged']) {
      return true;
    } else {
      //this.dialog.open(ErrorPopupComponent);
      this.router.navigate(['/login']);
      return false;
    }
}
}

export const provaGuard: CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) : boolean => {
  return inject(PermissionsService).canActivate(route, state);
};
