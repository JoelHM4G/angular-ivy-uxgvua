import { Component } from '@angular/core';

@Component({
  selector: 'app-contador',
  template: `<h1>{{ titulo }}</h1>
  <h3>La base es <strong>55</strong></h3>
  <button (click)="acumular(base)">+1</button>
  
  <span>{{ numero }}</span>
  
  <button (click)="acumular(-base)">-1</button>
  `,
})
export class ContadorComponent {
  titulo: string = 'Contador App';
  numero: number = 20;
  base: number = 5;
  acumular(valor: number) {
    console.log(valor);
    this.numero += valor;
  }
}
