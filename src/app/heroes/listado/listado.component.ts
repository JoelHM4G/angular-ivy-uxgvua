import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: 'listado.component.html',
})
export class ListadoComponent {
  heroes: string[] = ['Iron Man', 'Batman', 'Spiderman', 'Hulk'];
  eliminados: string[] = [];
  borrar(valor: string): void {
    const a = this.heroes.filter((e) => e != valor);
    this.heroes = a;
    this.eliminados = [...this.eliminados, valor];
    console.log(this.eliminados);
  }
  restaurar(valor: string): void {
    const a = this.eliminados.filter((e) => e != valor);
    this.eliminados = a;

    this.heroes = [...this.heroes, valor];
  }
}
