import { Component, Input, input, OnChanges, SimpleChanges } from '@angular/core';
import { CardPrimary } from './interface';

@Component({
  selector: 'app-card',
  standalone: false,
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  @Input() dataCard!: CardPrimary;

}
