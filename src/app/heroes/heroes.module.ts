import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HeroeCpmponent } from './heroes/hero.component';
import { ListadoComponent } from './listado/listado.component';

@NgModule({
  declarations: [HeroeCpmponent, ListadoComponent],
  exports: [ListadoComponent],
  imports: [CommonModule],
})
export class HeroesModule {}
