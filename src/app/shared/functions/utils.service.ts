import { PageCard } from './../../services/carousel-service.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  constructor() { }

  getPageCard(page: any) : PageCard {
    const typePage: PageCard = {
      name: page
    }

    return typePage;
  }

}
