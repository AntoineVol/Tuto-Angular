import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service'; 

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  selectedHero:Hero;
  heroes:Array<Hero>;


  constructor(private heroService : HeroService) {
    // this.getHeroes();
   }
   
   ngOnInit() {
     this.getHeroes();
   }
   getHeroes(): void {
    this.heroService.getHeroes()
        .subscribe(heroes => this.heroes = heroes);
  }


  onSelect(hero:Hero):void{
    this.selectedHero = hero;
  }
}