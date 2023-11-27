import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prova',
  templateUrl: './prova.component.html',
  styleUrls: ['./prova.component.scss'],
})
export class ProvaComponent implements OnInit {
  numero: number = 0;

  constructor() {}

  ngOnInit(): void {
    this.numero = 10;
  }
}
