import { Component, EventEmitter, Output, OnChanges, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnChanges, OnInit{
  @Output() valoreOutput = new EventEmitter();
  @Input() username?: string;
  password: string = "xio ";
  email: string = "diuj";
  data : any[] = [];

  ngOnInit(): void{
    console.log(1);
    
  }

  ngOnChanges(): void {
    console.log(2);
    

  }

  sendDati() {
    const userData = { username: this.username, password: this.password, email: this.email };
    this.data.push(userData);
    this.valoreOutput.emit(this.data);
    console.log(this.data[0]);
    
    this.data.splice(0, this.data.length);
  }
}


