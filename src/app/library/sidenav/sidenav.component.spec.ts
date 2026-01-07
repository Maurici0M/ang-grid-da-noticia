import { TypePage } from './../../components/container-pages/i-type-page';
import { UtilsService } from "../../shared/functions/utils.service";
import { SidenavComponent } from "./sidenav.component";
import { SidenavData } from '../../interfaces/sidenav/i-sidenav';

describe('SidenavComponent', () => {

  let component: SidenavComponent;

  let spyToggleCollapseSidenav: jasmine.Spy;

  let spyGoToPage: jasmine.Spy;

  let functionsUtils = new UtilsService();

  let spyOutputChangePage: jasmine.Spy;

  let dataSidenav: SidenavData[] = [
      {
          route: 'home',
          icon: 'home',
          text: 'Últimas Notícias'
      },

      {
          route: 'culinary',
          icon: 'fastfood',
          text: 'Culinária'
      },

      {
          route: 'space',
          icon: 'public',
          text: 'Espaço Sideral'
      },

      {
          route: 'technology',
          icon: 'computer',
          text: 'Tecnologia'
      },

      {
          route: 'about',
          icon: 'people',
          text: 'Sobre Nós'
      },
  ]

  beforeEach(() => {
    component = new SidenavComponent(
      functionsUtils
    );
  });

  it('verificando se o componete foi criado corretamente', () => {
    expect(component).toBeTruthy();

    expect(component.collapsed).toEqual(false);

    expect(component.dataSidenav).toEqual(dataSidenav);
  });

  describe('toggleCollapseSidenav', () => {
    beforeEach(() => {
      spyToggleCollapseSidenav = spyOn(component, 'toggleCollapseSidenav').and.callThrough();
    });

    it('verificando se, ao ser chamada, a funcao mudou o valor da variavel collapsed corretamente para true', () => {
      component.toggleCollapseSidenav();

      expect(spyToggleCollapseSidenav).toHaveBeenCalled();

      expect(component.collapsed).toBe(true);
    });

    it('verificando se, ao ser chamada, a funcao mudou o valor da variavel collapsed corretamente para false', () => {
      for (let index = 0; index < 2; index++) {
        component.toggleCollapseSidenav();
      }

      expect(spyToggleCollapseSidenav).toHaveBeenCalledTimes(2);

      expect(component.collapsed).toBe(false);
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
