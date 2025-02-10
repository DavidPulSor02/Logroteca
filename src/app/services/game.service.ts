import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  private myGames = new BehaviorSubject<any[]>(JSON.parse(localStorage.getItem('myGames') || '[]'));
  private logros = new BehaviorSubject<any>(JSON.parse(localStorage.getItem('logros') || '{}'));

  myGames$ = this.myGames.asObservable();
  logros$ = this.logros.asObservable();

  constructor() {}

  addGame(game: any) {
    const currentGames = this.myGames.value;
    if (!currentGames.some(g => g.title === game.title)) {
      const updatedGames = [...currentGames, game];
      this.myGames.next(updatedGames);
      localStorage.setItem('myGames', JSON.stringify(updatedGames));

      const currentLogros = this.logros.value;
      if (!currentLogros[game.title]) {
        currentLogros[game.title] = [];
        this.logros.next(currentLogros);
        localStorage.setItem('logros', JSON.stringify(currentLogros));
      }
    }
  }

  removeGame(game: any) {
    const updatedGames = this.myGames.value.filter(g => g.title !== game.title);
    this.myGames.next(updatedGames);
    localStorage.setItem('myGames', JSON.stringify(updatedGames));
  }

  addLogro(gameTitle: string, logro: string) {
    const currentLogros = this.logros.value;
    if (!currentLogros[gameTitle]) {
      currentLogros[gameTitle] = [];
    }
    currentLogros[gameTitle].push(logro);
    this.logros.next(currentLogros);
    localStorage.setItem('logros', JSON.stringify(currentLogros));
  }
}
