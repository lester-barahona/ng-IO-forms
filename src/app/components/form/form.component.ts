import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {


 public signupForm:FormGroup
 private _builder:FormBuilder

  constructor(_builder:FormBuilder) {
    
    this._builder=_builder;

    this.signupForm=this._builder.group({
      nombre:[''],
      usuario:['',Validators.required],
      email:['',Validators.compose([Validators.email,Validators.required])],
      password:['',Validators.required]
    });
   }

   enviar(values):void{

    console.log(values);


   }

  ngOnInit(): void {
  }

}
