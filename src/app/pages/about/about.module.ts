import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AboutPageRoutingModule } from './about-routing.module';

import { AboutPage } from './about.page';

import { HeroComponent } from 'src/app/components/about/hero/hero.component';
import { NavComponent } from 'src/app/components/main/nav/nav.component';
import { LightNavComponent } from 'src/app/components/main/light-nav/light-nav.component';
import { QuoteComponent } from 'src/app/components/about/quote/quote.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AboutPageRoutingModule
  ],
  declarations: [AboutPage,
    HeroComponent,
    NavComponent,
    LightNavComponent,
    QuoteComponent,]
})
export class AboutPageModule {}
