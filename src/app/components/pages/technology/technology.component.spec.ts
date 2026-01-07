import { of } from "rxjs";
import { CarouselService, PageCard } from "../../../services/carousel-service.service";
import { UtilsService } from "../../../shared/functions/utils.service";
import { TechnologyComponent } from "./technology.component";
import { MOCK_TECHNOLOGY } from "../../../mocks/carousel";

describe('TechnologyComponent', () => {

  let component: TechnologyComponent;

  let fakeCarouselService: jasmine.SpyObj<CarouselService>;

  let functionsUtils = new UtilsService();

  let spyNgOnInit: jasmine.Spy;

  let spyGetCardsCarousel: jasmine.Spy;

  beforeEach(() => {
    fakeCarouselService = jasmine.createSpyObj('CarouselService', ['getCards']);

    fakeCarouselService.getCards.and.returnValue(of(MOCK_TECHNOLOGY));

    component = new TechnologyComponent(
      fakeCarouselService,
      functionsUtils
    );
  });

  describe('ngOnInit', () => {
    beforeEach(() => {
      spyNgOnInit = spyOn(component, 'ngOnInit').and.callThrough();

      spyGetCardsCarousel = spyOn(component, 'getCardsCarousel').and.callThrough();
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

      expect(functionsUtils.getPageCard).toHaveBeenCalledWith(('technology'));

      expect(fakeCarouselService.getCards).toHaveBeenCalledWith(pageName);

      expect(component.dataCard).toBe(MOCK_TECHNOLOGY.card);

    });


  });

});
