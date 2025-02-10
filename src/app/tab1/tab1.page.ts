import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: false,
})
export class Tab1Page {
  games = [
    {
      title: 'Fortnite',
      image: 'https://tryhardguides.com/wp-content/uploads/2022/12/featured-fortnite-chapter-4-coordinate-codes.jpg',
      description: 'Explora un mundo increíble.'
    },
    {
      title: 'Rocket ',
      image: 'https://th.bing.com/th/id/OIP.yx7Xhr2dirVE-UabhaqplwHaEK?rs=1&pid=ImgDetMain',
      description: 'Corre a máxima velocidad.'
    }
  ];

  myGames: any[] = [];
  searchText: string = '';

  addToMyGames(game: any) {
    if (!this.myGames.some(g => g.title === game.title)) {
      this.myGames.push(game);
    }
  }

  filterGames() {
    return this.games.filter(game =>
      game.title.toLowerCase().includes(this.searchText.toLowerCase())
    );
  }
}