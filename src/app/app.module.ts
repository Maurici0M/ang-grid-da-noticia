import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import {MatIconModule} from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './library/card/card.component';
import { CarouselComponent } from './library/carousel/carousel.component';
import { HomeComponent } from './components/pages/home/home.component';
import { TechnologyComponent } from './components/pages/technology/technology.component';
import { SidenavComponent } from './library/sidenav/sidenav.component';
import { ContainerPagesComponent } from './components/container-pages/container-pages.component';
import { CulinaryComponent } from './components/pages/culinary/culinary.component';
import { AboutUsComponent } from './components/pages/about-us/about-us.component';
import { ErrorComponent } from './components/pages/error/error.component';
import { TitleComponent } from './library/title/title.component';


@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    CarouselComponent,
    HomeComponent,
    TechnologyComponent,
    SidenavComponent,
    ContainerPagesComponent,
    CulinaryComponent,
    AboutUsComponent,
    ErrorComponent,
    TitleComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    MatTooltipModule
  ],
  providers: [
    provideClientHydration(withEventReplay())
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
