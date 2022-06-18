import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IePageRoutingModule } from './ie-routing.module';

import { IePage } from './ie.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IePageRoutingModule
  ],
  declarations: [IePage]
})
export class IePageModule {}
