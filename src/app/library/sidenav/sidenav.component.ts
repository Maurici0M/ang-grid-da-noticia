import { Component, ChangeDetectionStrategy, EventEmitter, Output, Input } from '@angular/core';
import { SidenavData } from '../../interfaces/sidenav/i-sidenav';
import { UtilsService } from '../../shared/functions/utils.service';
import { ChangePage, TypePage } from '../../components/container-pages/i-type-page';

@Component({
  selector: 'app-sidenav',
  standalone: false,
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class SidenavComponent {
  @Output() changePage: EventEmitter<ChangePage> = new EventEmitter<ChangePage>;
  @Input() currentPage!: ChangePage;

  public collapsed: boolean = false;

  public dataSidenav: SidenavData[] = [
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

  constructor(private functionsUtils: UtilsService) {
  }

  public toggleCollapseSidenav(): void {
    this.collapsed = !this.collapsed;
  }

  public goToPage(route: any) {
    this.changePage.emit(
      route
    );
  }

}
