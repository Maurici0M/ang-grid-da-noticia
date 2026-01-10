import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ChangePage } from '../../container-pages/i-type-page';
import { CarouselService } from '../../../services/carousel-service.service';
import { UtilsService } from '../../../shared/functions/utils.service';
import { CardPrimary } from '../../../library/card/interface';
import { PageTitle } from '../../../library/title/title.component';

@Component({
  selector: 'app-culinary',
  standalone: false,
  templateUrl: './culinary.component.html',
  styleUrl: './culinary.component.scss'
})
export class CulinaryComponent implements OnInit {
  @Output() changePage: EventEmitter<ChangePage> = new EventEmitter<ChangePage>;

  public isErrorService: boolean = false;

  public dataCard: CardPrimary[] = [];

  public titlePage: PageTitle[] =[
    {
      text: 'Culinária: Veja as principais notícias sobre a cozinha, receitas, chefs e tudo do mundo gastronômico.'
    },

    {
      text: 'Conteúdos extras que podem te interessar:'
    }
  ];

  constructor(
    private carouselService: CarouselService,
    private functionsUtils: UtilsService
  ) {}

  public ngOnInit(): void {
    this.getCardsCarousel();
  }

  public getCardsCarousel(): void {
    const pageName = this.functionsUtils.getPageCard('culinary');

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
}
