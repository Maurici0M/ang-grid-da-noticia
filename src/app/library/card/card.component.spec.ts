import { CardComponent } from "./card.component";

describe('CardComponent', () => {
  let component: CardComponent;

  beforeEach(() => {
    component = new CardComponent();
  });

  it('verificando se o componente foi criado', () => {
    expect(component).toBeTruthy();
  });

});
