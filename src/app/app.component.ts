import { Component, OnInit } from '@angular/core';
import { Hero } from './hero';
import { HeroService } from './hero.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [HeroService]
})
export class AppComponent implements OnInit {
  title = 'Hi virgo';
  heros: Hero[];
  selectedHero: Hero;

  constructor(private heorService: HeroService) { } //代替 new HeroService()

  getHeros(): void {
      this.heorService.getHeroes().then(res => this.heros = res);
      console.log(this.heros);
  }

  ngOnInit(): void {
      console.log('init');
      this.getHeros();
  }

  onSelect(hero: Hero): void {
      this.selectedHero = hero;
  }
}
