import { Component, ViewChild } from '@angular/core';
import { Hero } from './hero';
import { NgForm } from '@angular/forms';
import { HeroesComponent } from './heroes/heroes.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title : String;
  newHeroName:String;

  @ViewChild(HeroesComponent)
  heroesComponent:HeroesComponent;

  constructor(){
    this.title= 'Tour Of Hero';
    this.newHeroName='';
  }
  validateHero(event : any, form:NgForm){
    console.log("Validation du nouveau hero");
    let hero : Hero = new Hero();
    hero.name = this.newHeroName;
    this.heroesComponent.heroes.push(hero);
    form.resetForm;
  }
}
