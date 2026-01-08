import { ChangePage, TypePage } from './../../container-pages/i-type-page';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CarouselService } from '../../../services/carousel-service.service';
import { CardPrimary } from '../../../library/card/interface';
import { UtilsService } from '../../../shared/functions/utils.service';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  @Output() changePage: EventEmitter<ChangePage> = new EventEmitter<ChangePage>;

  constructor(
    private carouselService: CarouselService,
    private functionsUtils: UtilsService
  ) {}

  dataCard: CardPrimary[] = [];

  ngOnInit(): void {
    this.getCardsCarousel();
  }

  getCardsCarousel(): void {
    const pageName = this.functionsUtils.getPageCard('home');

    this.carouselService.getCards(
      pageName
    ).subscribe(
    {
      next: (data) => {
        this.dataCard = data.card;
      },
      error: (error) => {
        console.log("Houve um erro ao carregar os cards do carrossel!", error);
      }
    }
    )
  }

  goToPage(value: any) {
    const namePage: TypePage = {
      current: value
    }

    this.changePage.emit(namePage);
  }

}
