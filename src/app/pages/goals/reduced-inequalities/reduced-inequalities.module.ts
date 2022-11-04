import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReducedInequalitiesPageRoutingModule } from './reduced-inequalities-routing.module';

import { ReducedInequalitiesPage } from './reduced-inequalities.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReducedInequalitiesPageRoutingModule
  ],
  declarations: [ReducedInequalitiesPage]
})
export class ReducedInequalitiesPageModule {}
