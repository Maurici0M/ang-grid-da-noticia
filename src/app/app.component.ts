import { Component } from '@angular/core';
import { TypePage } from './components/container-pages/i-type-page';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss'
})
export class AppComponent {

  public currentPage: TypePage = {
    current: 'home'
  };

  constructor() {
  }

  public handleChangePage(event: any) {
    this.currentPage = {
      current: event
    }
  }

}
