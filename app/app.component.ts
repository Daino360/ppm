import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: '/folder/Home', icon: 'home' },
    { title: 'Connect', url: '/folder/Connect', icon: 'wifi' },
    { title: 'Options', url: '/folder/Options', icon: 'settings' },
  ];
  constructor() {}
}
