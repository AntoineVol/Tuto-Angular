export class Hero{
    private static ID_COUNT=20;
    id: number;
    name: String;
    img:String;
    
    constructor(name?:string){
        this.id=Hero.ID_COUNT++;
        this.name=name;
        this.img='../../assets/hero'+((this.id)%4+1)+'.png';
        console.log(this.img);
        
    }
}