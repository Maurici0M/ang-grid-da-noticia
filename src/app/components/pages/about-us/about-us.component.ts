import { Component, EventEmitter, Output } from '@angular/core';
import { ChangePage } from '../../container-pages/i-type-page';
import { CardPrimary } from '../../../library/card/interface';
import { ErrorData } from '../error/error.component';
import { PageTitle } from '../../../library/title/title.component';

@Component({
  selector: 'app-about-us',
  standalone: false,
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.scss'
})
export class AboutUsComponent {
  @Output() changePage: EventEmitter<ChangePage> = new EventEmitter<ChangePage>;

  public isErrorService: boolean = true;

  public dataCard: CardPrimary[] = [];

  public dataErrorConstruction: ErrorData = {
      title: 'Pera um pouquinho!',
      description: 'Essa página ainda está em construção, e logo ficará disponível para visualização! ::).',
      srcImg: 'assets/gif/construction_giphy.gif',
      altImg: 'Gif de um canteiro de obras'
  }

  public titlePage: PageTitle = {
    text: 'Sobre Nós'
  }

}
