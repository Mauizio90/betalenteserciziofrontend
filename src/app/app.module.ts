import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatCell, MatTableModule} from '@angular/material/table';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MenuComponent } from './components/menu/menu.component';
import {MatMenuModule} from '@angular/material/menu';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import { BottoniesercizioComponent } from './components/bottoniesercizio/bottoniesercizio.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TableComponent } from './components/table/table.component';
import {MatInputModule} from '@angular/material/input';
import { FormComponent } from './components/form/form.component';
import { ReactiveFormComponent } from './components/reactive-form/reactive-form.component';
import { LoginComponent } from './components/login/login.component';
import { RegistrazioneComponent } from './components/registrazione/registrazione.component';
import { AreaRiservataComponent } from './components/area-riservata/area-riservata.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    BottoniesercizioComponent,
    TableComponent,
    FormComponent,
    ReactiveFormComponent,
    LoginComponent,
    RegistrazioneComponent,
    AreaRiservataComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule,
    MatMenuModule,
    MatButtonModule,
    MatTableModule,
    MatFormFieldModule,
    MatSelectModule,
    FormsModule,
    MatInputModule,
    ReactiveFormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
