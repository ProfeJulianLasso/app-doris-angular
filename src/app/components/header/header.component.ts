import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'doris-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  mensaje: string;
  constructor() {
    this.mensaje = 'Práctica de Angular';
  }

  ngOnInit(): void {}
}
