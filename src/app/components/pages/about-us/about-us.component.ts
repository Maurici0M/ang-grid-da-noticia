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

  public isErrorService: boolean = false;

  public dataCard: CardPrimary[] = [];

  public dataErrorConstruction: ErrorData = {
      title: 'Pera um pouquinho!',
      description: 'Essa página ainda está em construção, e logo ficará disponível para visualização! ::).',
      srcImg: 'https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExa2JtNTJ4ZG15eXk5YW93cWZjZGFwZW5pYWxheWVlZHM4ZW05d3cyaCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/hQw1HLgKZCpBIwehiq/giphy.gif',
      altImg: 'Stich olhando pela janela e indo embora'
  }

  public titlePage: PageTitle = {
    text: 'Sobre Nós'
  }

}
