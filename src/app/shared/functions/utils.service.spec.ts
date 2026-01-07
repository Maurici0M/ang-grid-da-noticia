import { UtilsService } from './utils.service';
import { PageCard } from '../../services/carousel-service.service';

describe('UtilsService', () => {
  let service: UtilsService;

  let spyGetPageCard: jasmine.Spy;

  beforeEach(() => {
    service = new UtilsService();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('getPageCard', () => {
    let pageName: PageCard;

    beforeEach(() => {
      spyGetPageCard = spyOn(service, 'getPageCard').and.callThrough();
    });

    it('verificando se a funcao oferta o retorno correto do tipo PageCard ao inserirmos o parametro', () => {
      let expectedReturn: PageCard = {
        name: 'home'
      }

      pageName = service.getPageCard('home');

      expect(spyGetPageCard).toHaveBeenCalledTimes(1);

      expect(spyGetPageCard).toHaveBeenCalledWith('home');

      expect(pageName).toEqual(expectedReturn);
    });
  });
});
