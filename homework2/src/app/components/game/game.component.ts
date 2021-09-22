import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Game } from '../../helpers/index';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  constructor() { }

  @Input() gameCard: Game;

  isDescriptionShown: boolean = false;

  ngOnInit(): void {
  }


  showDescription() {
    this.isDescriptionShown = ! this.isDescriptionShown;
  }

}
