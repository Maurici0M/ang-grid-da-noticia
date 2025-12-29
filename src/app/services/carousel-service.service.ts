import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { MOCK_CAROUSEL } from '../mocks/carousel';
import { CarouselData } from '../interfaces/carousel/i-carousel';

@Injectable({
  providedIn: 'root'
})
export class CarouselService {

  constructor() { }

  getCards():Observable<CarouselData> {
    return of (MOCK_CAROUSEL);
  }

}
