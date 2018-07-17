export class Hero{
    private static ID_COUNT=20;
    id: number;
    name: String;
    
    constructor(name?:string){
        this.id=Hero.ID_COUNT++;
        this.name=name;
    }
}