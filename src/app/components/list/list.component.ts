import { Component, OnInit } from '@angular/core';

import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  
  public users:any=[];


  constructor(private _http:HttpClient) { }

  ngOnInit(): void {

    this._http.get('https://jsonplaceholder.typicode.com/users').subscribe(
      (res:any[])=>{
        this.users=res
        console.log(this.users);
        
      },
      err=>console.error(err)
      
    );
  }

  borrarUsuario(id:number){
    this.users=this.users.filter(user=>user.id!=id);
  }

}
