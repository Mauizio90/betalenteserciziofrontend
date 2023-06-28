import { Component, ViewChild } from '@angular/core';
import { FormComponent } from './components/form/form.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild(FormComponent)
  figlio: FormComponent = new FormComponent;
  title = 'betalenteeserciziofront';
  public listadapadre : any[] = [];
  public valoredaOutput: any;
  

  
  

  ngOnInit(): void{
    this.figlio.sendDati()
    this.listadapadre.push({username:'poppo',email:'poppo@gmail.com',password:'1234',sesso:'M'},{username:'pappa',email:'pappa@gmail.com',password:'1234',sesso:'F'})
  }

}
