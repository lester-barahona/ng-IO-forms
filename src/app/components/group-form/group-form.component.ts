import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-group-form',
  templateUrl: './group-form.component.html',
  styleUrls: ['./group-form.component.css']
})
export class GroupFormComponent implements OnInit {

  form:FormGroup;

  constructor(private formBuilder:FormBuilder) {
    this.buildForm();
   }

  ngOnInit(): void {
  }

  private buildForm():void{
    // this.form=new FormGroup({
    //   name: new FormControl('',[Validators.required]),
    //   date: new FormControl('', [Validators.required]),
    //   email: new FormControl('', [Validators.email]),
    //   text: new FormControl('', [Validators.maxLength(200)]),
    //   category: new FormControl('', [Validators.required]),
    //   gender: new FormControl('', [Validators.required]),
    // });
    this.form = this.formBuilder.group({
      name: ['',  [Validators.required]],
      date: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      text: ['', [Validators.required, Validators.maxLength(200)]],
      category: ['', [Validators.required]],
      gender: ['', [Validators.required]],
    });
    
    // this.form.valueChanges
    // .pipe(
    //   debounceTime(500)
    // )
    // .subscribe(value => {
    //   console.log(value);
    // });
  }

  save(event: Event) {
    event.preventDefault();
    if (this.form.valid) {
      const value = this.form.value;
      console.log(value);
    }else {
      this.form.markAllAsTouched();
    }
  }

  doSomething() {
    console.log('click');
  }

  get emailField(){
    return this.form.get('email')
  }

}
