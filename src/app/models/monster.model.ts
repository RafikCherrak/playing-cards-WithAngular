import { MonsterType } from "../utils/monster.utils";

export class Monster {
      id: number = -1;
      name:string="My Monster";
      hp:number = 40;
      figureCaption:string = "N°001 Monster";
      attackName:string="Geo Impact";
      attackStrength:number = 60;
      attackDescription:string="this is a long description of a monster capacity,Probably somthing to do with electricity";
      image: string = "assets/electric.jpeg";
      type : MonsterType = MonsterType.ELECTRIC
}