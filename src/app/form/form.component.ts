import { Component, OnInit } from '@angular/core';
import { HeroService } from '../hero.service'
import { NgForm } from '@angular/forms';
import { Hero } from '../hero';
import { Location } from '@angular/common'

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  newHeroName:String;

  constructor(private heroService:HeroService, private location:Location) {
    this.newHeroName="";
   }

  ngOnInit() {
  }

  validateHero(event : any, form:NgForm){
    console.log("Validation du nouveau hero");
    let hero : Hero = new Hero();
    hero.name = this.newHeroName;
    this.heroService.addHeroes(hero);
    form.resetForm;
    this.location.back();
  }


}
