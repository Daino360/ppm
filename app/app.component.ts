import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Interfaccia 1', url: '/folder/Interfaccia 1', icon: 'game-controller' },
    { title: 'Interfaccia 2', url: '/folder/Interfaccia 2', icon: 'game-controller' },
    { title: 'Interfaccia 3', url: '/folder/Interfccia 3', icon: 'game-controller' },
  ];
  constructor() {}
}
