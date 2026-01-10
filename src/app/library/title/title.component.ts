import { Component, Input } from '@angular/core';

export interface PageTitle {
  text: string
}

@Component({
  selector: 'app-title',
  standalone: false,
  templateUrl: './title.component.html',
  styleUrl: './title.component.scss'
})
export class TitleComponent {
  @Input() title: PageTitle = {
    text: ''
  };

}
