import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-form-validation',
  templateUrl: './form-validation.component.html',
  styleUrls: ['./form-validation.component.css']
})
export class FormValidationComponent implements OnInit {
 creditCart!:string;
 username!:string;
 address!:string;
 @Output() checksuccess:EventEmitter<string>=new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  onSubmit():void{
   
    this.checksuccess.emit(this.username);
   }
}
