import { Injectable} from '@angular/core';
import { Observable, BehaviorSubject, from } from 'rxjs';
import { Hero } from './hero';
import { MessageService} from './message.service';
import { HttpClient } from '@angular/common/http';
import { switchMap, map, toArray } from 'rxjs/operators'
import { environment as ENV } from '../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  private subject : BehaviorSubject<Array<Hero>>;
  private mockUrl: string;

  constructor(private httpClient:HttpClient,private messageService : MessageService) {
    this.subject=new BehaviorSubject(new Array());
    this.mockUrl = ENV.apiUrl + '/assets/mocks-heroes.json';
   }
  
  get heroes():Observable<Hero[]>{
    this.messageService.add('HeroService : fetched heroes');
    return this.subject.asObservable();
  }

  loadMock(){
    this.httpClient.get<Array<Hero>>(this.mockUrl).pipe(switchMap((array)=>from(array)),map((obj)=>Object.assign(new Hero(), obj)),toArray()).subscribe((heroes)=>this.subject.next(heroes));
  }
  addHeroes(hero : Hero){
    let heroArray:Array<Hero> = this.subject.value.slice();
    heroArray.push(hero);
    this.subject.next(heroArray);
  }
  deleteHero(id:number){
    let heroArray:Array<Hero> = this.subject.value.slice();
    heroArray.splice(id,1);
    this.subject.next(heroArray);  
  }
  readHero(id:number){
    console.log("read -> service id : " + id);
    
    return this.subject.value.find((hero)=>hero.id===id);
  }
}


