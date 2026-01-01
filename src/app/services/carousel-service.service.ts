import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { MOCK_CAROUSEL, MOCK_CULINARY, MOCK_HOME, MOCK_TECHNOLOGY } from '../mocks/carousel';
import { CarouselData } from '../interfaces/carousel/i-carousel';

export interface PageCard {
  name: 'about' | 'culinary' | 'technology' | 'home'
}

@Injectable({
  providedIn: 'root'
})
export class CarouselService {

  constructor() { }

  getCards(page: PageCard):Observable<CarouselData> {
    switch (page.name) {
      case page.name = 'home':
        return of(MOCK_HOME);

      case page.name = 'about':
        return of();

      case page.name = 'culinary':
        return of(MOCK_CULINARY);

      case page.name = 'technology':
        return of(MOCK_TECHNOLOGY);

      default:
        return of();
    }
  }

}
