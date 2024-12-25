import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Monster } from '../../models/monster.model';
import { MonsterTypeProperties } from '../../utils/monster.utils';

@Component({
  selector: 'app-playing-card',
  imports: [],
  templateUrl: './playing-card.component.html',
  styleUrl: './playing-card.component.css'
})
export class PlayingCardComponent implements OnChanges {
  constructor(){
    this.monsterTypeIcon= MonsterTypeProperties[this.monster.type].imageUrl;
    this.backgroundColor = MonsterTypeProperties[this.monster.type].color;
  }
  ngOnChanges(changes: SimpleChanges): void {
    if(changes['monster']){
       if(changes['monster'].previousValue?.type != changes['monster'].currentValue.type){
        this.monsterTypeIcon= MonsterTypeProperties[this.monster.type].imageUrl;
      this.backgroundColor = MonsterTypeProperties[this.monster.type].color;
       }
    }
  }

  @Input({
    required:true,
  }) monster: Monster = new Monster();
  monsterTypeIcon : string = "assets/electric.jpeg";
  backgroundColor : string = "rgb(255 ,255 ,104)";
}
