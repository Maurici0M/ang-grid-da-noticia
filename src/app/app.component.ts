import { Component } from '@angular/core';
import { CardPrimary } from './library/card/interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ang-carrossel-de-musicas';

  dataCard: CardPrimary[] = [
    {
      title: "Discord: O que é e como funciona o app para gamers que virou foco de abusos contra jovens",
      description: "Plataforma ganhou popularidade entre os jovens por transmissões ao vivo de vídeos das partidas, mas virou mecanismo da ação de criminosos para subornar menores",
      srcImg: "https://4kwallpapers.com/images/walls/thumbs/24799.jpg"
    },
    {
      title: "Card 2",
      description: "Descricao 2",
      srcImg: "https://4kwallpapers.com/images/walls/thumbs/1684.jpg"
    },
    {
      title: "Card 3",
      description: "Descricao 3",
      srcImg: "https://4kwallpapers.com/images/walls/thumbs/5630.jpg"
    },
    {
      title: "Card 4",
      description: "Descricao 4",
      srcImg: "https://imgs.search.brave.com/3IhricSR8EHQ3KQxLHXGsXdVcqXkzQpTtgfZz34oMJw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA1LzIxLzE4LzAz/LzM2MF9GXzUyMTE4/MDM4NF84MzdaUVZ0/R2RCb2NuS1FyNXBy/eFd6cGpJYTY0d3Rn/Ty5qcGc"
    },

  ]
}
