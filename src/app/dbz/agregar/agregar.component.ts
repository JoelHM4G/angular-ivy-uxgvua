import { Component, Input } from '@angular/core';
import { Character } from '../interfaces/dbz.interface';

@Component({
  templateUrl: 'agregar.component.html',
  selector: 'app-agregar',
})
export class AgregarComponent {
  @Input() new: Character = {
    name: '',
    power: 0,
  };
  @Input() characters: Character[] = [];
  save(): void {
    this.characters = [...this.characters, this.new];

    // this.characters.push(this.new);
    this.new = {
      name: '',
      power: 0,
    };
  }
}
