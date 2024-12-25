export enum MonsterType {
    PLANT = "plant",
    ELECTRIC = "electric" ,
    FIRE = "fire",
    WATER = "water",
}
export interface IMonsterProperties {
    imageUrl : string;
    color : string;
}
export const MonsterTypeProperties: {[key:string] : IMonsterProperties}={
[MonsterType.PLANT]: {
    imageUrl: "assets/plant.png",
    color: "rgb(112, 255, 104)",
},
[MonsterType.ELECTRIC]: {
    imageUrl: "assets/electric.jpeg",
    color: "rgb(255 ,255 ,104)",
},
[MonsterType.FIRE]: {
    imageUrl: "assets/fire.png",
    color: "rgb(243, 128, 113)",
},
[MonsterType.WATER]: {
    imageUrl: "assets/water.png",
    color: "rgb(104, 154, 255)",
}
}