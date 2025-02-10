import { Component } from '@angular/core';
import { GameService } from '../services/game.service';

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
  myGames: any[] = [];
  logros: any = {};

  games = [
    { title: 'Fortnite', image: 'https://tryhardguides.com/wp-content/uploads/2022/12/featured-fortnite-chapter-4-coordinate-codes.jpg', description: 'Explora un mundo increíble.' },
    { title: 'Rocket League', image: 'https://th.bing.com/th/id/OIP.yx7Xhr2dirVE-UabhaqplwHaEK?rs=1&pid=ImgDetMain', description: 'Corre a máxima velocidad.' },
    { title: 'Among Us ', image: 'https://static.wixstatic.com/media/8c48d8_14a87ebb765d40e19a9b100268f1da7a~mv2.jpg/v1/fill/w_992,h_558,al_c,q_85/8c48d8_14a87ebb765d40e19a9b100268f1da7a~mv2.jpg', description: 'Corre a máxima velocidad.' },
    { title: 'Call Of Duty', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Call_of_Duty_2023_logo.svg/1280px-Call_of_Duty_2023_logo.svg.png', description: 'Corre a máxima velocidad.' },
    { title: 'Just Dance', image: 'https://sm.ign.com/ign_es/screenshot/default/analisis-just-dance-2022_y8g5.jpg', description: 'Corre a máxima velocidad.' },
    { title: 'Mario Party', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Mario_Party_Logo_%28MPSuperstars%29.png/1200px-Mario_Party_Logo_%28MPSuperstars%29.png', description: 'Corre a máxima velocidad.' },
    
 
 
  ];

  constructor(public gameService: GameService) {}

  ngOnInit() {
    this.gameService.myGames$.subscribe(games => this.myGames = games);
    this.gameService.logros$.subscribe(logros => this.logros = logros);
  }

  addToMyGames(game: any) {
    this.gameService.addGame(game);
  }

  removeFromMyGames(game: any) {
    this.gameService.removeGame(game);
  }

  get filteredGames() {
    return this.games.filter(game => game.title.toLowerCase().includes(this.searchText.toLowerCase()));
  }

  acceptCookies() {
    this.showCookies = false;
  }
}
