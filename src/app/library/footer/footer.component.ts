import { Component, EventEmitter, Output } from '@angular/core';
import { DataFooter } from '../../interfaces/footer/i-footer';
import { ChangePage } from '../../components/container-pages/i-type-page';

@Component({
  selector: 'app-footer',
  standalone: false,
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  @Output() changePage: EventEmitter<ChangePage> = new EventEmitter<ChangePage>;

  public footerData: DataFooter = {
    seeAlso: [
      {
        text: 'Últimas Notícias',
        route: 'home'
      },

      {
        text: 'Espaço Sideral',
        route: 'space'
      },

      {
        text: 'Culinária',
        route: 'culinary'
      },

      {
        text: 'Tecnologia',
        route: 'technology'
      }
    ],

    connect: [
      {
        text: 'Login/Cadastro',
        route: 'login'
      }
    ],

    learnMore: [
      {
        text: 'Sobre nós',
        route: 'about'
      }
    ],

    followUs: [
      {
        text: 'Mauricio M.',
        social: [
          {
            socialMediaIcon: 'bi bi-linkedin',
            linkSocialMedia: 'https://www.linkedin.com/in/mauricio-marques-costa-994b25210/',
          },

          {
            socialMediaIcon: 'bi bi-github',
            linkSocialMedia: 'https://github.com/Maurici0M'
          }
      ]
      },

      {
        text: 'Michael Paes',
        social: [
          {
            socialMediaIcon: 'bi bi-linkedin',
            linkSocialMedia: 'https://www.linkedin.com/in/michael-paes-050817200/',
          },

          {
            socialMediaIcon: 'bi bi-github',
            linkSocialMedia: 'https://github.com/Michaelpaes'
          },
        ]
      }
    ],

    getToKnow: [
      {
        text: 'Carrossel Musical',
        route: 'https://ang-carrossel-de-musicas.vercel.app/'
      },

      {
        text: 'Grid da Notícia',
        route: 'https://grid-da-noticia.vercel.app/'
      },

    ]
  }

  public goToPage(route: any) {
    this.changePage.emit(
      route
    );
  }

  public getYear() {
    return new Date().getFullYear();
  }

}
