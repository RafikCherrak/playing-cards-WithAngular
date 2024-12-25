import { Component, computed, inject, model, signal } from '@angular/core';
import { PlayingCardComponent } from "./components/playing-card/playing-card.component";
import { Monster } from './models/monster.model';
import { MatIconModule } from '@angular/material/icon';
import { SearchBarComponent } from "./components/search-bar/search-bar.component";
import { MonsterType } from './utils/monster.utils';
import { CommonModule } from '@angular/common';
import { MonsterService } from './services/monster/monster.service';

@Component({
  selector: 'app-root',
  imports: [PlayingCardComponent, MatIconModule, SearchBarComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {


   monsterService =inject(MonsterService);
  monsters!: Monster[];
  Search = model('');
  filteredMonster = computed(()=>{
    return this.monsters.filter(monster => monster.name.toLowerCase().includes(this.Search().toLowerCase()));
  })


  constructor(
  ){
    this.monsters = [];
    const monster1=new Monster();
    monster1.name="Pik";
    monster1.hp=40;
    monster1.attackStrength=60;
    monster1.figureCaption="N° 002 Monster"
    monster1.image = "assets/electric.JPEG",
    monster1.type=MonsterType.ELECTRIC,
    this.monsters.push(monster1);


    const monster2=new Monster();
    monster2.name="rafik";
    monster2.hp=100;
    monster2.attackStrength=440;
    monster2.figureCaption="N° 003 Monster"
    monster2.image = "assets/water.png",
    monster2.type=MonsterType.WATER,
    this.monsters.push(monster2);

    const monster3=new Monster();
    monster3.name="NASSIM";
    monster3.hp=100;
    monster3.attackStrength=440;
    monster3.figureCaption="N° 004 Monster"
    monster3.image = "assets/plant.png",
    monster3.type=MonsterType.PLANT,
    this.monsters.push(monster3);

    const monster4=new Monster();
    monster4.name="sALIM";
    monster4.hp=100;
    monster4.attackStrength=440;
    monster4.figureCaption="N° 005 Monster"
    monster4.image = "assets/fire.png",
    monster4.type=MonsterType.FIRE,
    this.monsters.push(monster4);
    this.monsterService.getAll();
  }

}
