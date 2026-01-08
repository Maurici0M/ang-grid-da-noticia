import { AboutUsComponent } from "./about-us.component";

describe('AboutUsComponent', () => {
  let component: AboutUsComponent;

  beforeEach(() => {
    component = new AboutUsComponent(
    );
  });

  it('verificando se o componente foi criado', () => {
    expect(component).toBeTruthy();
  });

});
