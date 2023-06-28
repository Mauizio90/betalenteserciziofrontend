import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BottoniesercizioComponent } from './bottoniesercizio.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes=[
  {
    path: '',
    component: BottoniesercizioComponent
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule]
})
export class BottoniesercizioRoutingModule { }
