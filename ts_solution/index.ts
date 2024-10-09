import * as input from './resources/input.json';

class Creature{
    id: number;
    isHumanoid: boolean|undefined;
    planet:string|undefined;
    age:number|undefined;
    traits:string[]|undefined;

    constructor(id:number, isHumanoid:boolean|undefined, planet:string|undefined, age:number|undefined, traits:string[]|undefined){
        this.id = id;
        this.isHumanoid = isHumanoid;
        this.planet = planet;
        this.age = age;
        this.traits = traits;
    }
}

class Program{
    public static Main():void{
       var creatureList:Creature[] = input.input.map( (val:any) =>{
            return new Creature(
                val.id,
                val.isHumanoid,
                val.planet,
                val.age,
                val.traits
            );
       });
       console.log(creatureList);
    }
}

Program.Main();
