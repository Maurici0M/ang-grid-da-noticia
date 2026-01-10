import { HomeComponent } from './home.component';
import { CarouselService, PageCard } from '../../../services/carousel-service.service';
import { UtilsService } from '../../../shared/functions/utils.service';
import { of } from 'rxjs';
import { MOCK_HOME } from '../../../mocks/carousel';
import { TypePage } from '../../container-pages/i-type-page';

describe('HomeComponent', () => {
  let component: HomeComponent;

  let carouselService: jasmine.SpyObj<CarouselService>;

  let functionsUtils = new UtilsService();

  let spyNgOnInit: jasmine.Spy;

  let spyGetCardsCarousel: jasmine.Spy;

  let spyOutputChangePage: jasmine.Spy;

  let spyGoToPage: jasmine.Spy;

  beforeEach(() => {
    carouselService = jasmine.createSpyObj('CarouselService', ['getCards']);

    /*
      Quando o servico for chamado no onInit, ele retornara um mock de dados para o carrossel
      (Necessario para evitar o erro nos testes com o subscribe);
    */

    carouselService.getCards.and.returnValue(of(MOCK_HOME));

    component = new HomeComponent(
      carouselService,
      functionsUtils
    );

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('ngOnInit', () => {
    beforeEach(() => {
      spyNgOnInit = spyOn(component, 'ngOnInit').and.callThrough();

      spyGetCardsCarousel = spyOn(component, 'getCardsCarousel').and.callThrough();
    });

    it('verificando se a funcao foi chamada uma vez', () => {
      // --- act
      component.ngOnInit();

      // --- assert
      expect(spyNgOnInit).toHaveBeenCalledTimes(1);

      expect(spyGetCardsCarousel).toHaveBeenCalledTimes(1);
    });

  });

  describe('getCardsCarousel', () => {
    let pageName: PageCard = {
      name: 'home'
    };

    beforeEach(() => {
      spyOn(functionsUtils, 'getPageCard').and.callThrough();
    });

    it('Verificando se o servico é chamado corretamente e armazena os dados na variavel dataCard para criar o array de cards', () => {
      // --- act
      component.getCardsCarousel();

      // --- assert

      // validacoes da funcao que gera o pageName
      expect(functionsUtils.getPageCard).toHaveBeenCalledTimes(1);

      expect(functionsUtils.getPageCard).toHaveBeenCalledWith(pageName.name);

      // validacoes do servico
      expect(carouselService.getCards).toHaveBeenCalledTimes(1);

      expect(carouselService.getCards).toHaveBeenCalledWith(pageName);

      expect(component.dataCard).toBe(MOCK_HOME.card);
    });

  });

  describe('goToPage', () => {
      let routeName: TypePage = {
        current: 'home'
      };

      beforeEach(() => {
        spyOutputChangePage = spyOn(component.changePage, 'emit').and.callThrough();

        spyGoToPage = spyOn(component, 'goToPage').and.callThrough();
      });

      it('verificando se a funcao quando chamada, emitiu o evento corretamente', () => {
        component.goToPage(routeName.current);

        expect(spyGoToPage).toHaveBeenCalledWith('home');

        expect(spyOutputChangePage).toHaveBeenCalledWith(routeName.current);
      });

  });

});
