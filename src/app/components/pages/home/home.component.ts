import { ChangePage, TypePage } from './../../container-pages/i-type-page';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CarouselService } from '../../../services/carousel-service.service';
import { CardPrimary } from '../../../library/card/interface';
import { UtilsService } from '../../../shared/functions/utils.service';
import { PageTitle } from '../../../library/title/title.component';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  @Output() changePage: EventEmitter<ChangePage> = new EventEmitter<ChangePage>;

  public isErrorService: boolean = false;

  public dataCard: CardPrimary[] = [];

  public titlePage: PageTitle[] =[
    {
      text: 'Veja as principais notícias sobre Culinária, Tecnologia e nosso universo.'
    },

    {
      text: 'Conteúdos extras que podem te interessar:'
    }
  ]

  constructor(
    private carouselService: CarouselService,
    private functionsUtils: UtilsService
  ) {}

  public ngOnInit(): void {
    this.getCardsCarousel();
  }

  public getCardsCarousel(): void {
    const pageName = this.functionsUtils.getPageCard('home');

    this.carouselService.getCards(
      pageName
    ).subscribe(
    {
      next: (data) => {
        this.dataCard = data.card;

        console.log(data.card.length);
      },
      error: (error) => {
        console.log("Erro: " + error.message);
      }
    }
    );
  }

  public goToPage(value: any) {
    const namePage: TypePage = {
      current: value
    }

    this.changePage.emit(namePage.current as any);
  }

}
