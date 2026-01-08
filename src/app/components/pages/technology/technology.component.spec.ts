import { of } from 'rxjs';
import {
  CarouselService,
  PageCard,
} from '../../../services/carousel-service.service';
import { UtilsService } from '../../../shared/functions/utils.service';
import { TechnologyComponent } from './technology.component';
import { MOCK_TECHNOLOGY } from '../../../mocks/carousel';
import { TypePage } from '../../container-pages/i-type-page';

describe('TechnologyComponent', () => {
  let component: TechnologyComponent;

  let fakeCarouselService: jasmine.SpyObj<CarouselService>;

  let functionsUtils = new UtilsService();

  let spyNgOnInit: jasmine.Spy;

  let spyGetCardsCarousel: jasmine.Spy;

  let spyOutputChangePage: jasmine.Spy;

  let spyGoToPage: jasmine.Spy;

  beforeEach(() => {
    fakeCarouselService = jasmine.createSpyObj('CarouselService', ['getCards']);

    fakeCarouselService.getCards.and.returnValue(of(MOCK_TECHNOLOGY));

    component = new TechnologyComponent(fakeCarouselService, functionsUtils);
  });

  describe('ngOnInit', () => {
    beforeEach(() => {
      spyNgOnInit = spyOn(component, 'ngOnInit').and.callThrough();

      spyGetCardsCarousel = spyOn(
        component,
        'getCardsCarousel'
      ).and.callThrough();
    });

    it('verificando se a funcao foi chamada uma vez sem erros', () => {
      component.ngOnInit();

      expect(spyNgOnInit).toHaveBeenCalled();

      expect(spyGetCardsCarousel).toHaveBeenCalled();
    });
  });

  describe('getCardsCarousel', () => {
    let pageName: PageCard = functionsUtils.getPageCard('technology');

    beforeEach(() => {
      spyOn(functionsUtils, 'getPageCard').and.callThrough();
    });

    it('verificando se a funcao foi chamada uma vez e salvou os dados obtidos na variavel dataCard', () => {
      component.getCardsCarousel();

      expect(functionsUtils.getPageCard).toHaveBeenCalledWith('technology');

      expect(fakeCarouselService.getCards).toHaveBeenCalledWith(pageName);

      expect(component.dataCard).toBe(MOCK_TECHNOLOGY.card);
    });
  });

  describe('goToPage', () => {
    let routeName: TypePage = {
      current: 'home',
    };

    beforeEach(() => {
      spyOutputChangePage = spyOn(component.changePage, 'emit').and.callThrough();

      spyGoToPage = spyOn(component, 'goToPage').and.callThrough();
    });

    it('verificando se a funcao quando chamada, emitiu o evento corretamente', () => {
      component.goToPage(routeName.current);

      expect(spyGoToPage).toHaveBeenCalledWith('home');

      expect(spyOutputChangePage).toHaveBeenCalledWith(routeName);
    });
  });
});
