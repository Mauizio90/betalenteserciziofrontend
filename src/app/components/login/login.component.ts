import { Component, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent { 
  form: FormGroup = new FormGroup({
    username : new FormControl('',[Validators.required,Validators.pattern(/^[a-zA-Z\s]*$/)]),
    password : new FormControl('',[Validators.required,Validators.pattern(/^[a-zA-Z\s]*$/)]),      
  }) 
  
  
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    const defaultUsername = this.route.snapshot.paramMap.get('username');
    this.form.patchValue({ username: defaultUsername });
  }

  resetForm(){
    this.form.reset()
  }
}
