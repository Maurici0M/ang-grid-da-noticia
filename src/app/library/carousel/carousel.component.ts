import { Component, OnInit } from '@angular/core';
import { CardPrimary } from '../card/interface';
import { CarouselService } from '../../services/carousel-service.service';

@Component({
  selector: 'app-carousel',
  standalone: false,
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss'
})

export class CarouselComponent implements OnInit {

  dataCard: CardPrimary[] = []

  swiperBreakPoints = {
    0: { slidesPerView: 1, spaceBetween: 0 },
    660: { slidesPerView: 2, spaceBetween: 30 },
    950: { slidesPerView: 3, spaceBetween: 30 },
    1300: {slidesPerView: 4, spaceBetween: 30}
  }

  constructor(
    private carouselService: CarouselService
  ) {}

  ngOnInit(): void {
    this.getService();
  }

  getService() {
    this.carouselService.getCards().subscribe(
      {
        next: (data) => {
          this.dataCard = data.card;
        },

        error: (error) => {
          console.log("Houve um erro ao buscar os dados no servidor! ", error);
        }
      }
    );
  }

}
