import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registrar-medico',
  templateUrl: './registrar-medico.component.html',
  styleUrls: ['./registrar-medico.component.css']
})
export class RegistrarMedicoComponent implements OnInit {

  persona: any;
  constructor() {
    this.persona = {};
  }

  ngOnInit(): void {}

  registrar() {}

}
