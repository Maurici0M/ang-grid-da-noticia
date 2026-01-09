import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ChangePage } from '../../container-pages/i-type-page';

export interface ErrorType {
  model: 'service' | 'not-found'
}

export interface ErrorData {
  title: string,
  description: string,
  srcImg: string,
  altImg: string
}

@Component({
  selector: 'app-error',
  standalone: false,
  templateUrl: './error.component.html',
  styleUrl: './error.component.scss'
})
export class ErrorComponent {
  @Output() changePage: EventEmitter<ChangePage> = new EventEmitter<ChangePage>;

  @Input() typeError: ErrorType = {
    model: 'service'
  };

  @Input() dataError!: ErrorData;

  constructor() {
  }

  reloadPage() {
    window.location.reload();
  }

}
