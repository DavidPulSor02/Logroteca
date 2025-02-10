import { Component } from '@angular/core';
import { GameService } from '../services/game.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: false,
})
export class Tab2Page {
  myGames: any[] = [];
  logros: any = {};
  selectedGame: any = null;

  constructor(public gameService: GameService) {}

  ngOnInit() {
    this.gameService.myGames$.subscribe(games => this.myGames = games);
    this.gameService.logros$.subscribe(logros => this.logros = logros);
  }

  viewGame(game: any) {
    this.selectedGame = game;
  }
}
