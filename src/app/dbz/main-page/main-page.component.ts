import { Component } from '@angular/core';
import { Character } from '../interfaces/dbz.interface';
@Component({
  templateUrl: 'main-page.component.html',
  selector: 'app-main-page',
})
export class MainPageComponent {
  new: Character = {
    name: '',
    power: 0,
  };
  characters: Character[] = [
    {
      name: 'Goku',
      power: 12000,
    },
    {
      name: 'Vegeta',
      power: 7500,
    },
    {
      name: 'Krilin',
      power: 1200,
    },
  ];
}
