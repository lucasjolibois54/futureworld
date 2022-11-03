import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PovertyPageRoutingModule } from './poverty-routing.module';

import { PovertyPage } from './poverty.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PovertyPageRoutingModule
  ],
  declarations: [PovertyPage]
})
export class PovertyPageModule {}
