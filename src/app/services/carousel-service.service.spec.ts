import { CarouselService, PageCard } from "./carousel-service.service";
import { MOCK_CULINARY, MOCK_HOME, MOCK_TECHNOLOGY } from "../mocks/carousel";

function returnName(number: number): PageCard {
  switch(number) {
    case 1:
      return {name: "home"};

      case 2:
        return {name: "about"};

      case 3:
        return {name: "culinary"};

      case 4:
        return {name: "technology"};

      default:
        return {name: "home"};
  };
}

describe('CarouselService', () => {
  let component: CarouselService;

  beforeEach(() => {
    component = new CarouselService();
  });

  it('verificando se o componente foi criado', () => {
    expect(component).toBeTruthy();
  });

  describe('getCards', () => {

    let dataCard: any;

    it('verificando se a funcao foi chamada uma vez e retornou os dados para o parametro HOME corretamente', () => {
      component.getCards(returnName(1)).subscribe(data => {
        expect(data).toEqual(MOCK_HOME);
      });
    });

    it('verificando se a funcao foi chamada uma vez e retornou os dados para o parametro ABOUT corretamente', () => {
      component.getCards(returnName(2)).subscribe(data => {
        dataCard = data;
      });

      // como o mock nao existe, deve retornar um array vazio
      expect(dataCard).toEqual([]);
    });

    it('verificando se a funcao foi chamada uma vez e retornou os dados para o parametro CULINARY corretamente', () => {
      component.getCards(returnName(3)).subscribe(data => {
        expect(data).toEqual(MOCK_CULINARY);
      });
    });

    it('verificando se a funcao foi chamada uma vez e retornou os dados para o parametro TECHNOLOGY corretamente', () => {
      component.getCards(returnName(4)).subscribe(data => {
        expect(data).toEqual(MOCK_TECHNOLOGY);
      });

    });

  });
});
