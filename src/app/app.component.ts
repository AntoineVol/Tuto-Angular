import { Component, ViewChild } from '@angular/core';
import { Hero } from './hero';
import { NgForm } from '@angular/forms';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroService } from './hero.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title : String;
  newHeroName:String;



  constructor(private heroService : HeroService){
    this.title= 'Tour Of Hero';
    this.newHeroName='';
  }

  ngOnInit(){
    console.log("Init app.comp");
    
    this.heroService.loadMock();
  }
  validateHero(event : any, form:NgForm){
    console.log("Validation du nouveau hero");
    let hero : Hero = new Hero();
    hero.name = this.newHeroName;
    this.heroService.addHeroes(hero);
    form.resetForm;
  }
}
