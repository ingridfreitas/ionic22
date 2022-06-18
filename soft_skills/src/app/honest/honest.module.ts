import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HonestPageRoutingModule } from './honest-routing.module';

import { HonestPage } from './honest.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HonestPageRoutingModule
  ],
  declarations: [HonestPage]
})
export class HonestPageModule {}
