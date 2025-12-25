import { Component, Input, input, OnChanges, SimpleChanges } from '@angular/core';
import { CardPrimary } from './interface';

@Component({
  selector: 'app-card',
  standalone: false,
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent implements OnChanges {
  @Input() dataCard!: CardPrimary;

  ngOnChanges(changes: SimpleChanges): void {
    console.log(this.dataCard);
  }

}
