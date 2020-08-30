import { Component, OnInit } from '@angular/core';
import { GameService } from '../../core/services/game.service';
import { GameModel } from '../../shared/models/game.model';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class GroupComponent implements OnInit {
  games: GameModel[];
  columnsToDisplay = ['home', 'away'];
  expandedElement: GameModel | null;

  constructor(private gameService: GameService) {
  }

  ngOnInit(): void {
    this.gameService.getGames().subscribe((games: GameModel[]) => {
      console.log(games)
      this.games = games;
    });
  }
}
