import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ChangePage, TypePage } from './i-type-page';

@Component({
  selector: 'app-container-pages',
  standalone: false,
  templateUrl: './container-pages.component.html',
  styleUrl: './container-pages.component.scss'
})

export class ContainerPagesComponent implements OnInit {
  @Output() changePage: EventEmitter<ChangePage> = new EventEmitter<ChangePage>;

  @Input() typePage : TypePage = {
    current: 'home'
  };

  ngOnInit(): void {

  }

  handleChangePage(event: TypePage) {
    const dataPage = event;

    this.changePage.emit(dataPage);
  }
}
