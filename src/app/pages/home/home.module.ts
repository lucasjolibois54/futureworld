import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';
import { HeroComponent } from 'src/app/components/home/hero/hero.component';
import { LightNavComponent } from 'src/app/components/main/light-nav/light-nav.component';
import { SubHeroComponent } from 'src/app/components/home/sub-hero/sub-hero.component';
import { SliderComponent } from 'src/app/components/home/slider/slider.component';
import { FourGoalsComponent } from 'src/app/components/home/four-goals/four-goals.component';

import { HomePageRoutingModule } from './home-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule
  ],
  declarations: [HomePage,
    LightNavComponent,
    HeroComponent,
    SubHeroComponent,
    SliderComponent,
    FourGoalsComponent]
})
export class HomePageModule {}
