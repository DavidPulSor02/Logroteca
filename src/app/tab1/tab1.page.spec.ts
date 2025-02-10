import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: false,
})
export class Tab1Page {
  
  achievements: string[] = [];
  addedAchievements: string[] = [];
  searchText: string = '';
  showCookies: boolean = true;

  games = [
    {
      title: 'Fortnite',
      image: 'https://tryhardguides.com/wp-content/uploads/2022/12/featured-fortnite-chapter-4-coordinate-codes.jpg',
      description: 'Explora un mundo increíble.'
    },
    {
      title: 'Rocket League',
      image: 'https://th.bing.com/th/id/OIP.yx7Xhr2dirVE-UabhaqplwHaEK?rs=1&pid=ImgDetMain',
      description: 'Corre a máxima velocidad.'
    }
  ];

  myGames: any[] = JSON.parse(localStorage.getItem('myGames') || '[]');
  logros: any = JSON.parse(localStorage.getItem('logros') || '{}');

  markAsAdded(achievement: string) {
    if (!this.addedAchievements.includes(achievement)) {
      this.addedAchievements.push(achievement);
    }
  }

  addToMyGames(game: any) {
    if (!this.myGames.some(g => g.title === game.title)) {
      this.myGames.push(game);
      localStorage.setItem('myGames', JSON.stringify(this.myGames));

      // Asegurar que tenga un espacio en logros
      if (!this.logros[game.title]) {
        this.logros[game.title] = [];
      }
      localStorage.setItem('logros', JSON.stringify(this.logros));
    }
  }

  removeFromMyGames(game: any) {
    this.myGames = this.myGames.filter(g => g.title !== game.title);
    localStorage.setItem('myGames', JSON.stringify(this.myGames));
  }

  get filteredGames() {
    return this.games.filter(game =>
      game.title.toLowerCase().includes(this.searchText.toLowerCase())
    );
  }

  acceptCookies() {
    this.showCookies = false;
  }
}
