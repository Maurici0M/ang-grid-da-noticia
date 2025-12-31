import { CardPrimary } from '../../../library/card/interface';
import { CarouselService, PageCard } from '../../../services/carousel-service.service';
import { UtilsService } from '../../../shared/functions/utils.service';
import { ChangePage, TypePage } from './../../container-pages/i-type-page';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-technology',
  standalone: false,
  templateUrl: './technology.component.html',
  styleUrl: './technology.component.scss'
})
export class TechnologyComponent implements OnInit{
  @Output() changePage: EventEmitter<ChangePage> = new EventEmitter<ChangePage>;

  dataCard: CardPrimary[] = [];

  constructor(
    private carouselService: CarouselService,
    private functionsUtils: UtilsService
  ) {

  }

  ngOnInit(): void {
    this.getCardsCarousel();
  }

  getCardsCarousel() {
    const pageName = this.functionsUtils.getPageCard('technology');

    this.carouselService.getCards(
      pageName
    ).subscribe(
      {
        next: (data) => {
          this.dataCard = data.card;
        },

        error: (error) => {
          alert("Ops! Ocorreu um erro ao carregar os dados da página!");
          console.log("Dados do erro: ", error);
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
