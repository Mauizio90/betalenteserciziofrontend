import { Component, OnInit, Input } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { User } from '../shared/user.model';
import { Sex } from '../shared/sex.enum';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  @Input() valoreInput: any;
  displayedColumns: string[] = ['username', 'password', 'email', 'age', 'sex', 'isActive'];
  utenti: User[] = [
    {username:'poppo',password:'1234', email:'poppo@gmail.com', age: 18, sex: Sex.M, isActive: true},
    {username:'Paooooolllla',password:'1234', email:'pappa@gmail.com', age: 65, sex: Sex.F, isActive: true}
  ]
  dataSource = new MatTableDataSource<User>(this.utenti);
  
  
  

  ngOnInit(): void{

    /* if(this.username){
      console.log(this.username);
    }

    if(this.age){
      console.log(this.age);
    }

    if(this.isActive == true){
      console.log(this.isActive)
    }

    if(this.lista.length > 0){
      console.log(this.lista);
    } */

  }
}
