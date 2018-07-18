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
    this.heroes=new Array();
   }
   
   ngOnInit() {
     console.log("initialisation heroes.comp");
     this.heroService.heroes.subscribe((list)=>this.heroes=list);
   }

  deleteHero(heroId:number){
    console.log("Delete heroes");
    let index = this.heroes.findIndex((hero)=>hero.id===heroId);
    this.heroService.deleteHero(index);
  }
}
