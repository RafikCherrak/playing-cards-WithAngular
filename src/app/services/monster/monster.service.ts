import { Injectable } from '@angular/core';
import { Monster } from '../../models/monster.model';

@Injectable({
  providedIn: 'root'
})
export class MonsterService {

  monsters : Monster[] = [];
  currentIndex:number = 1;
  constructor() { }

  getAll(): Monster[]{
    return this.monsters;
  }
  get(id: number) : Monster | undefined {
    const monster = this.monsters.find(monster =>monster.id === id);
    return monster ? monster : undefined;
  }
  add(monster: Monster) : Monster {
    const monstercOPY = monster;
     monstercOPY.id = this.currentIndex;
     this.monsters.push(monstercOPY);
     this.currentIndex++;
     return monstercOPY;
  }
}
