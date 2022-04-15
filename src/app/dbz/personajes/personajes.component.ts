import { Component, Input } from '@angular/core';
import { Character } from '../interfaces/dbz.interface';

@Component({
  templateUrl: 'personajes.component.html',
  selector: 'app-personajes',
})
export class PersonajesComponent {
  @Input() characters: Character[] = [];
  save() {
    console.log(this.characters);
  }
}
