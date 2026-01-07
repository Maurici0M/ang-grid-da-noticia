import { CulinaryComponent } from "./culinary.component";

describe('CulinaryComponent', () => {

  let component: CulinaryComponent;

  beforeEach(() => {
    component = new CulinaryComponent();
  });

  it('verificando se o componente foi criado', () => {
    expect(component).toBeTruthy();
  });

});
