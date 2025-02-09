import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: false,
})
export class Tab1Page {

  games = [
    { 
      title: 'Juego Aventura', 
      image: 'https://th.bing.com/th?u=https%3a%2f%2fstore-images.s-microsoft.com%2fimage%2fapps.43942.70702278257994163.eb8febd9-1124-4e74-9587-d5082fbfffb5.75a42b9d-60e8-4a39-a073-7fcbc9b9deee&ehk=ZSGvH1%2fqmek7DE7TMiAI4C5DJyuwuowT0f9HaSJpemk%3d&w=180&h=180&o=6&dpr=1.3&pid=adswpo', 
      description: 'Explora un mundo increíble.',
      achievements: ['Primer paso', 'Explorador experto']
    },
    { 
      title: 'Carreras Rápidas', 
      image: 'assets/images/game2.jpg', 
      description: 'Corre a máxima velocidad.',
      achievements: ['Primer carrera', 'Campeón']
    }
  ];

  achievements: string[] = [];
  addedAchievements: string[] = [];

  constructor(private navCtrl: NavController) {}

  addAchievement(game: any) {
    game.achievements.forEach((ach: string) => {
      if (!this.achievements.includes(ach)) {
        this.achievements.push(ach);
      }
    });
  }

  markAsAdded(achievement: string) {
    if (!this.addedAchievements.includes(achievement)) {
      this.addedAchievements.push(achievement);
    }
  }
}
