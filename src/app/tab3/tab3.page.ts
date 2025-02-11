import { Component, Inject } from '@angular/core';
import { MenuController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  standalone: false,
})
export class Tab3Page {
  selectedTab: string = 'premios'; // 🔹 Pestaña por defecto

  juegos = [
    {
      nombre: 'Fortnite',
      imagen: 'https://th.bing.com/th/id/OIP.4_HOJV-wjPu-hoYwirGdmwHaEs?rs=1&pid=ImgDetMain',
      horasJugadas: 120,
      amigosQueJuegan: 5,
      graficoHoras: [120],
    },
    {
      nombre: 'Rocket League',
      imagen: 'https://th.bing.com/th/id/OIP.yx7Xhr2dirVE-UabhaqplwHaEK?rs=1&pid=ImgDetMain',
      horasJugadas: 80,
      amigosQueJuegan: 3,
      graficoHoras: [80],
    },
  ];

  constructor(
    @Inject(MenuController) private menuController: MenuController,
    private alertController: AlertController
  ) { }

  // Método para abrir el menú
  openMenu() {
    this.menuController.open('profileMenu');
  }

  // Método para mostrar una alerta al hacer clic en los iconos de las plataformas
  async showAlert(platform: string) {
    const alert = await this.alertController.create({
      header: 'Iniciar sesión',
      message: `Debes iniciar sesión en ${platform} para continuar.`,
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
        },
        {
          text: 'Iniciar sesión',
          handler: () => {
            console.log(`Redirigiendo a iniciar sesión en ${platform}...`);
          },
        },
      ],
    });

    await alert.present();
  }

  // Método para cambiar la pestaña activa
  changeTab(tab: string) {
    this.selectedTab = tab;
  }
}