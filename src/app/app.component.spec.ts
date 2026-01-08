import { AppComponent } from "./app.component";
import { TypePage } from "./components/container-pages/i-type-page";

describe('AppComponent', () => {

  let component: AppComponent;

  let currentPage: TypePage = {
      current: 'home'
  };

  beforeEach(() => {
    component = new AppComponent();
  });

  it('verificando se o componente foi criado corretamente', () => {
    expect(component).toBeTruthy();

    expect(component.currentPage).toEqual(currentPage);
  });

});
