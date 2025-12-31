import { Component, EventEmitter, Output } from '@angular/core';
import { ChangePage } from '../../container-pages/i-type-page';

@Component({
  selector: 'app-culinary',
  standalone: false,
  templateUrl: './culinary.component.html',
  styleUrl: './culinary.component.scss'
})
export class CulinaryComponent {
  @Output() changePage: EventEmitter<ChangePage> = new EventEmitter<ChangePage>;


}
