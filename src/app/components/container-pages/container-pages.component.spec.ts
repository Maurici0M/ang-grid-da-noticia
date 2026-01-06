import { ContainerPagesComponent } from './container-pages.component';
import { TypePage } from './i-type-page';

describe('ContainerPagesComponent', () => {
  let component: ContainerPagesComponent;

  let spyHandleChangePage: jasmine.Spy;

  let spyOutputChangePage: jasmine.Spy;

  let spyNgOnInit: jasmine.Spy;

  beforeEach(async () => {

    component = new ContainerPagesComponent();
  });

  describe('ngOnInit', () => {

    beforeEach(() => {
      spyNgOnInit = spyOn(component, 'ngOnInit').and.callThrough();
    });

    it('Verificando se a funcao foi chamada uma vez', () => {
      component.ngOnInit();

      expect(spyNgOnInit).toHaveBeenCalledTimes(1);
    });
  });

  describe('handleChangePage', () => {
    let dataPage: TypePage = {
      current: 'home'
    };

    beforeEach(() => {
      spyHandleChangePage = spyOn(component, 'handleChangePage').and.callThrough();

      spyOutputChangePage = spyOn(component.changePage, 'emit').and.callThrough();
    });

    it('Verificando se a funcao foi chamada uma vez', () => {
      let fake: TypePage = {
        current: 'home'
      }

      component.handleChangePage(dataPage);

      expect(spyHandleChangePage).toHaveBeenCalledTimes(1);

    });

    it('Verificando se a funcao foi chamada emitindo os parametros corretos', () => {

      // --- arrange ---

      // cria uma variavel 'clone' do dataPage somente para validar os resultados no assert
      let fakeData: TypePage = {
        current: 'home'
      }

      // --- act ---

      // chama a funcao uma vez durante o teste com os parametros da variavel dataPage
      component.handleChangePage(dataPage);

      // --- assert ---

      // verificando se a funcao foi chamada uma vez
      expect(spyHandleChangePage).toHaveBeenCalledTimes(1);

      // verificando se a funcao foi chamada com os parametros corretos sem erro
      expect(spyHandleChangePage).toHaveBeenCalledWith(dataPage);

      // verificando se o evento output foi emitido uma vez
      expect(component.changePage.emit).toHaveBeenCalledTimes(1);

      // verificando se o evento output foi emitido com os parametros corretos

      /*
        Aqui foi verificado se o evento output foi emitido com o fakeData (que são os mesmos dados da variável dataPage)
        somente para garantir que os dados são iguais
      */
      expect(component.changePage.emit).toHaveBeenCalledWith(fakeData);
    });

  });

});
