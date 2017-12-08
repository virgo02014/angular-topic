import { Component } from '@angular/core';
import { Hero } from './hero';

const HEROS: Hero[] = [
    {id: 11, name: 'a'},
    {id: 12, name: 'b'},
    {id: 13, name: 'c'},
    {id: 14, name: 'd'},
    {id: 15, name: 'e'},
    {id: 16, name: 'f'},
    {id: 17, name: 'g'}
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Hi virgo';
  heros = HEROS;
  selectedHero: Hero;

  onSelect(hero: Hero): void {
      this.selectedHero = hero;
  }
}
