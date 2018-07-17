import { Injectable, inject } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Hero } from './hero';
import { HEROES} from './mocks-heroes';
import { MessageService} from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {


  constructor(private messageService : MessageService) { }
  
  getHeroes():Observable<Hero[]>{
    this.messageService.add('HeroService : fetched heroes');
    return of(HEROES);
  }
}


