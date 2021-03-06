import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../hero';
import { ActivatedRoute } from '@angular/router';
import { HeroService } from '../hero.service';
import { Location } from '@angular/common'

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})

export class HeroDetailComponent implements OnInit {
  @Input() hero:Hero;

  constructor( private route : ActivatedRoute, private heroService : HeroService, private location :Location ) { }

  ngOnInit() {
    this.getHero();
  }

  getHero(){
    const id :number= +this.route.snapshot.paramMap.get('id');
    this.hero = this.heroService.readHero(id);
  }

  goBack(){
    console.log("Retour à la page precedente");
    
    this.location.back();
  }
}
