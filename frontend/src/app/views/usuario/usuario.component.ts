import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  visibility:boolean=true;


  public modo: any = "";
  public prioridad: any = "";
  persona: any;
  constructor() {
    this.persona = {};
  }

  ngOnInit(): void {}

  registrar() {}
}
