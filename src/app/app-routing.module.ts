import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { provaGuard } from './prova.guard';

const routes: Routes = [
  {path: 'login', loadChildren: () => import('./components/login/login.module').then(m => m.LoginModule)},
  {path: 'registrazione', loadChildren: () => import('./components/registrazione/registrazione.module').then(m => m.RegistrazioneModule)},
  {path: 'area-riservata', loadChildren: () => import('./components/area-riservata/area-riservata.module').then(m => m.AreaRiservataModule)},
  {path: 'home', loadChildren: () => import('./components/menu/menu.module').then(m => m.MenuModule),
canActivate: [provaGuard],
data:{userLogged : true} },
  {path: 'areabottoni', loadChildren: () => import('./components/bottoniesercizio/bottoniesercizio.module').then(m => m.BottoniesercizioModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
