import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, UrlSegment } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public rutaLogin: any = "";

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.rutaLogin = this.router.url;
  }




}
