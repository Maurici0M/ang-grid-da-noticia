import { Component, EventEmitter, Output } from '@angular/core';
import { ChangePage } from '../../container-pages/i-type-page';

@Component({
  selector: 'app-about-us',
  standalone: false,
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.scss'
})
export class AboutUsComponent {
  @Output() changePage: EventEmitter<ChangePage> = new EventEmitter<ChangePage>;


}
