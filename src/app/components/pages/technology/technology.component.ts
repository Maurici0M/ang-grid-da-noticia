import { CardPrimary } from '../../../library/card/interface';
import { PageTitle } from '../../../library/title/title.component';
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

  public isErrorService: boolean = false;

  public dataCard: CardPrimary[] = [];

  public titlePage: PageTitle[] =[
    {
       text: 'Tecnologia: Veja as principais notícias sobre IA, Jogos Eletrônicos, Informática, e tudo do mundo tech.'
    },

    {
      text: 'Conteúdos extras que podem te interessar:'
    }
  ]

  constructor(
    private carouselService: CarouselService,
    private functionsUtils: UtilsService
  ) {

  }

  public ngOnInit(): void {
    this.getCardsCarousel();
  }

  public getCardsCarousel() {
    const pageName = this.functionsUtils.getPageCard('technology');

    this.carouselService.getCards(
      pageName
    ).subscribe(
      {
        next: (data) => {
          this.dataCard = data.card;
        },

        error: (error) => {
          this.isErrorService = true;
        }
      }
    )
  }

  public goToPage(value: any) {
    const namePage: TypePage = {
      current: value
    }

    this.changePage.emit(namePage.current as any);
  }
}
