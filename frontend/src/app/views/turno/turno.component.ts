import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-turno',
  templateUrl: './turno.component.html',
  styleUrls: ['./turno.component.css']
})
export class TurnoComponent implements OnInit {
  
  public modo: any = "false";

  constructor() { }

  ngOnInit(): void {
  }

}
