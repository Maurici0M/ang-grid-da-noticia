import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { MOCK_MEXT, MOCK_CULINARY, MOCK_HOME, MOCK_TECHNOLOGY } from '../mocks/carousel';
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
      case 'home':
        return of(MOCK_HOME);

      case 'about':
        return of([] as any);

      case 'culinary':
        return of(MOCK_CULINARY);

      case 'technology':
        return of(MOCK_TECHNOLOGY);

      default:
        return of([] as any);
    }
  }

}
