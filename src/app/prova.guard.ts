import { Component } from '@angular/core';
import { CanActivateFn } from '@angular/router';

@Component({
  template: `
    <h2>Error</h2>
    <p>You must be logged in to access the home page.</p>
  `,
})


export class ErrorPopupComponent {}


export const provaGuard: CanActivateFn = (route, state) => {

  const userLogged = route.data['userLogged'];
  if(userLogged == true){
    return userLogged
  }else{
    return userLogged;
  }
};
