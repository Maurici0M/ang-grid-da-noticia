import { Component, Input, OnInit } from '@angular/core';
import { CardPrimary } from '../card/interface';
import { CarouselService } from '../../services/carousel-service.service';

@Component({
  selector: 'app-carousel',
  standalone: false,
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss'
})

export class CarouselComponent implements OnInit {

  @Input() dataCard: CardPrimary[] = [];

  swiperBreakPoints = {
    0: { slidesPerView: 1, spaceBetween: 0 },
    660: { slidesPerView: 2, spaceBetween: 30 },
    950: { slidesPerView: 3, spaceBetween: 30 },
    1300: {slidesPerView: 4, spaceBetween: 30}
  }

  swiperConfigurations: any = {
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

  constructor(
    private carouselService: CarouselService
  ) {}

  ngOnInit(): void {
  }

}
