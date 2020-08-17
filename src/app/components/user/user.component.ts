import { Component, OnInit, Input, Output, EventEmitter, Host } from '@angular/core';
import { ListComponent } from '../list/list.component';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  @Input('data')user:any;

  @Output()borrar=new EventEmitter<number>();

  constructor(@Host() private _list:ListComponent) { }


  borrarUsuario(id:number){
    this.borrar.emit(id);
  }
  borrarUsuarioHost(id:number){
    this._list.users=this._list.users.filter(user=>user.id!=id);
  }

  ngOnInit(): void {
  }

}
