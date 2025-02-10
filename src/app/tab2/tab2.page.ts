import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: false,
})
export class Tab2Page {

  constructor() {
    
  }
  myGames: any[] = JSON.parse(localStorage.getItem('myGames') || '[]');
  logros: any = JSON.parse(localStorage.getItem('logros') || '{}');

  addLogro(gameTitle: string, logro: string) {
    if (!this.logros[gameTitle]) {
      this.logros[gameTitle] = [];
    }
    this.logros[gameTitle].push(logro);
    localStorage.setItem('logros', JSON.stringify(this.logros));
  }

}
