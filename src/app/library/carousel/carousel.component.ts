import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CardPrimary } from '../card/interface';
import { CarouselService } from '../../services/carousel-service.service';
import { ErrorData } from '../../components/pages/error/error.component';
import { ChangePage, TypePage } from '../../components/container-pages/i-type-page';

@Component({
  selector: 'app-carousel',
  standalone: false,
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss'
})

export class CarouselComponent implements OnInit {
  @Output() changePage: EventEmitter<ChangePage> = new EventEmitter<ChangePage>;

  @Input() dataCard: CardPrimary[] = [];

  public isErrorService: boolean = false;

  public swiperBreakPoints = {
    0: { slidesPerView: 1, spaceBetween: 0 },
    660: { slidesPerView: 2, spaceBetween: 15 },
    950: { slidesPerView: 3, spaceBetween: 30 },
    1300: {slidesPerView: 4, spaceBetween: 30}
  }

  public swiperConfigurations: any = {
    navigation: true,

    pagination: {
      clickable: true,
      dynamicBullets: true
    },

    slidesPerView: 3,

    spaceBetween: 30,

    rewind: false,

    breakpoints: this.swiperBreakPoints,
  }

  public dataErrorService: ErrorData = {
    title: 'Mil desculpas!',
    description: 'Não conseguimos nos conectar ao servidor, já estamos trabalhando para solucionar isto o mais rápido possível.',
    srcImg: 'assets/gif/stitch_giphy.gif',
    altImg: 'Stich olhando pela janela e indo embora'
  }

  constructor(
    private carouselService: CarouselService
  ) {}

  public ngOnInit(): void {
    if(this.dataCard.length < 4) {
      this.isErrorService = true;
    }
  }

}
