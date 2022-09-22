import { Component, VERSION } from '@angular/core';
import { AppService } from './services';

@Component({
  selector: 'app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name: string =  'Angular ' + VERSION.major;
  title: string = "";

  constructor(private apps: AppService) {
    this.apps.setData({
      id: "APP1", title: "Demo 01", api: "https://api.income2.in"
    });

    this.title = this.apps.getData().title;
  }
}
