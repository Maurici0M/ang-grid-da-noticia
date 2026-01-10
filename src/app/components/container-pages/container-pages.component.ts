import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ChangePage, TypePage } from './i-type-page';
import { ErrorData, ErrorType } from '../pages/error/error.component';

@Component({
  selector: 'app-container-pages',
  standalone: false,
  templateUrl: './container-pages.component.html',
  styleUrl: './container-pages.component.scss'
})

export class ContainerPagesComponent implements OnInit {
  @Output() changePage: EventEmitter<ChangePage> = new EventEmitter<ChangePage>;

  @Input() typePage : TypePage = {
    current: 'home'
  };

  dataErrorNotFound: ErrorData = {
    title: 'Página não encontrada!',
    description: 'Poxa vida, não conseguimos encontrar a página solicitada! Ela pode ter sido desativada ou está em manutenção.',
    srcImg: 'https://imgs.search.brave.com/yTFFCXS-rkM2uu4NlA5GqaKR0WcYlzoIObKHjVIwzpY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJiYXQuY29t/L2ltZy83NDQyOTkt/d2FsbHBhcGVyLTRr/LXdhbGwtZS0yMDIw/LTRrLXdhbGxwYXBl/ci5qcGc',
    altImg: 'Robô Wall-e olhando para o céu vazio'
  }

  dataErrorService: ErrorData = {
    title: 'Mil desculpas!',
    description: 'Não conseguimos nos conectar ao servidor. Já estamos trabalhando para solucionar isto o mais rápido possível.',
    srcImg: 'https://media.giphy.com/media/3b8OYv6DwPs4g/giphy.gif',
    altImg: 'Stich olhando pela janela e indo embora'
  }

  ngOnInit(): void {
  }

  handleChangePage(event: TypePage) {
    const dataPage = event;

    this.changePage.emit(dataPage);
  }

  getTypeError(name: any) : ErrorType {
    const typeError: ErrorType = {
      model: name
    }

    return typeError;
  }
}
