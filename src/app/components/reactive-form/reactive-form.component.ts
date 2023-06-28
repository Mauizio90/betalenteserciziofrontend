import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit{
  

  form: FormGroup = new FormGroup({
    name : new FormControl('',[Validators.required,Validators.pattern(/^[a-zA-Z\s]*$/)]),
    surname : new FormControl('',[Validators.required,Validators.pattern(/^[a-zA-Z\s]*$/)]),
    age : new FormControl('',[Validators.required,Validators.pattern(/^[0-9]\d*$/), Validators.min(1), Validators.max(110)]),
    sex : new FormControl(''),
    contacts :new FormGroup({
      email: new FormControl('',[Validators.email, Validators.required]),
      phone: new FormControl('',[Validators.required,Validators.pattern(/^[0-9]\d*$/)])

    })
  })
  mostraJson = false

  ngOnInit(): void {
  }

  resetForm(){
    this.form.reset()
  }

  toggleJson(){
    this.mostraJson = !this.mostraJson
  }


}
