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




  constructor(private heroService : HeroService){
    this.title= 'Tour Of Hero';
    
  }

  ngOnInit(){
    console.log("Init app.comp");
    
    this.heroService.loadMock();
  }

}
