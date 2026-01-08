import { of } from "rxjs";
import { MOCK_MEXT } from "../../mocks/carousel";
import { CarouselService } from "../../services/carousel-service.service";
import { CarouselComponent } from "./carousel.component";

describe('CarouselComponent', () => {

  let component: CarouselComponent;

  let fakeCarouselService: jasmine.SpyObj<CarouselService>;

  let swiperBreakPoints = {
    0: { slidesPerView: 1, spaceBetween: 0 },
    660: { slidesPerView: 2, spaceBetween: 30 },
    950: { slidesPerView: 3, spaceBetween: 30 },
    1300: {slidesPerView: 4, spaceBetween: 30}
  }

  let swiperConfigurations: any = {
    navigation: true,

    pagination: {
      clickable: true,
      dynamicBullets: true
    },

    slidesPerView: 3,

    spaceBetween: 30,

    rewind: false,

    breakpoints: swiperBreakPoints,
  }

  beforeEach(() => {
    // criando o objeto que sera espionado
    fakeCarouselService = jasmine.createSpyObj('CarouselService', ['getCards']);

    // quando o servico for chamado, nos testes, retornara o MOCK_MEXT para termos resultados de exemplo
    fakeCarouselService.getCards.and.returnValue(of(MOCK_MEXT));

    component = new CarouselComponent(
      fakeCarouselService
    );

  });

  it('verificando se o componente foi criado', () => {
    expect(component).toBeTruthy();

    expect(component.dataCard).toEqual([]);

    expect(component.swiperBreakPoints).toEqual(swiperBreakPoints);

    expect(component.swiperConfigurations).toEqual(swiperConfigurations);
  });

});
