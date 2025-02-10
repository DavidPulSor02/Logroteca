import { Component, Inject } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  standalone: false,
})
export class Tab3Page {
  constructor(@Inject(MenuController) private menuController: MenuController) { }

  // Método para abrir el menú
  openMenu() {
    this.menuController.open('profileMenu');
  }


}
